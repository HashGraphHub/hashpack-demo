# <span style="color:#f9b000">REST API</span>

![REST API](https://static.didcoding.com/media/tutorials/hashgraphhub_how_to/how_to_build_a_hedera_app_3.jpg "REST API")


<span style="color:#f9b000">Feel free to use this repo as a 'cheat sheet'</span>
***
***

## Get started

In the last module we created a simple Hedera account query endpoint. We can now add this to our project endpoints to enable users to import a wallet.

1) Use the following code to enter into the api container.
```
docker exec -it hashgraphhub_api_1 bash

```

2) Go ahead and create a serializer dir, __init__.py and account.py file with the following code.
```
cd users
mkdir serializers && cd serializers
echo This is our account file > account.py  && echo '' > __init__.py
cd ..
echo This is our exceptions file > exceptions.py  && echo This is our permissions file > permissions.py
cd views
echo This is our account file > account.py
```

3) Open the new /app/backend/users/serializers/account.py file and add the following code.

```
# --------------------------------------------------------------
# Django imports
# --------------------------------------------------------------
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _

# --------------------------------------------------------------
# Project imports
# --------------------------------------------------------------
from external_apis.hedera import HederaAccount

# --------------------------------------------------------------
# App imports
# --------------------------------------------------------------
from users.models import Account

# --------------------------------------------------------------
# 3rd Party imports
# --------------------------------------------------------------
from rest_framework import serializers
from rest_framework.serializers import ValidationError


class CreateAccountSerializer(serializers.ModelSerializer):

	private_key = serializers.CharField(max_length=300)
	external_id = serializers.CharField(max_length=300)

	class Meta:
		model = Account
		fields = (
			'external_id',
			'private_key',
		)


	def validate(self, attrs):

		operator = attrs.get("external_id")
		operator_private_key = attrs.get("private_key")
		
		#instantiate the HederaAccount class
		acc = HederaAccount(
			account_id = operator,
			operator = operator,
        	operator_private_key = operator_private_key
		)

		#test validity of account details via API
		acc = acc.account_info_query()
		if acc["status"] == 400:
			raise ValidationError(f"Validation Error: {acc['obj']}")
		return attrs
	
	def create_account(self, request, data):
		acc, create = Account.objects.get_or_create(
			user = request.user, **data
		)
		return acc



class AccountSerializer(serializers.ModelSerializer):

	class Meta:
		model = Account
		fields = (
			'id',
			'external_id',
			'private_key'
		)
```

4) We now Open the new /app/backend/users/serializers/__init__.py file and add the following code.
```
# --------------------------------------------------------------
# App imports
# --------------------------------------------------------------
from users.serializers.account import AccountSerializer, CreateAccountSerializer



__all__ = [
    CreateAccountSerializer,
    AccountSerializer
]
```

5) Open the new /app/backend/users/views/account.py file and add the following code.

```
# --------------------------------------------------------------
# Python imports
# --------------------------------------------------------------
from json import JSONDecodeError

# --------------------------------------------------------------
# Django imports
# --------------------------------------------------------------
from django.http import JsonResponse
from django.shortcuts import get_object_or_404

# --------------------------------------------------------------
# App imports
# --------------------------------------------------------------
from users.serializers import CreateAccountSerializer, AccountSerializer
from users.models import Account
from users.permissions import AccountBelongsToUser

# --------------------------------------------------------------
# 3rd Party imports
# --------------------------------------------------------------
from rest_framework.parsers import JSONParser
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.mixins import ListModelMixin,UpdateModelMixin,RetrieveModelMixin



class AccountViewSet(
        ListModelMixin,
        RetrieveModelMixin, 
        UpdateModelMixin,
        viewsets.GenericViewSet
        ):
    """
    A simple ViewSet for creating, listing or retrieving account details.
    """
    # permission_classes = (IsAuthenticated,)
    queryset = Account.objects.all()
    permission_classes = (IsAuthenticated, AccountBelongsToUser)

    def get_serializer_class(self):
        if self.request.method == "POST":
            return CreateAccountSerializer
        return AccountSerializer

    def list(self, request):
        serializer = self.get_serializer_class(self.queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        obj = get_object_or_404(self.queryset, pk = pk)
        serializer = self.get_serializer_class(obj)
        return Response(serializer.data)

    def create(self, request):
        try:
            data = JSONParser().parse(request)
            serializer = self.get_serializer_class()(data=data)
            if serializer.is_valid(raise_exception=True):
                account = serializer.create_account(request, data)
                return Response(AccountSerializer(account).data)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except JSONDecodeError:
            return JsonResponse({"result": "error","message": "Json decoding error"}, status= 400)+
```
6) We now Open the new /app/backend/users/views/__init__.py file and add the following code.
```
from users.views.activate_email import ActivationEmail
from users.views.activate import activate
from users.views.password_reset_email import PasswordResetEmail

from users.views.account import AccountViewSet

__all__ = [
    ActivationEmail,
    activate,
    PasswordResetEmail,
    AccountViewSet
]
```
7) We can now add our new view to our router. Open /app/backend/users/routers and add the following code.
```
# --------------------------------------------------------------
# Django imports
# --------------------------------------------------------------
from django.urls import path, re_path, include

# --------------------------------------------------------------
# app imports
# --------------------------------------------------------------
from users.views import AccountViewSet

# --------------------------------------------------------------
# Project imports
# --------------------------------------------------------------
from hashgraphhub.routers import router

router.register('account', AccountViewSet)
urlpatterns = router.urls
```
7) Lets create the permissions and exceptions that have been referenced in the view. Open /app/backend/users/permissions and add the following code.
```
# --------------------------------------------------------------
# Python imports
# --------------------------------------------------------------
import logging

# --------------------------------------------------------------
# App imports
# --------------------------------------------------------------
from users.models import Account
from users.exceptions import (
    AccountOwnershipException, 
)

# --------------------------------------------------------------
# 3rd Party imports
# --------------------------------------------------------------
from rest_framework import permissions


logger = logging.getLogger(__name__)


class AccountBelongsToUser(permissions.BasePermission):

    def has_permission(self, request, view):
        if request.method == "POST":
            return True
        else:
            account_id = getattr(request.account, "id", None)
            user_id = request.user.id

            if not self._does_account_belong_to_user(account_id, user_id):
                raise AccountOwnershipException()
            return True

    def _does_account_belong_to_user(self, account_id, user_id) -> bool:
        return Account.objects.filter(
            id=account_id,
            user__id=user_id
        ).exists()
```
8) Open /app/backend/users/exceptions and add the following code.
```
# --------------------------------------------------------------
# Django imports
# --------------------------------------------------------------
from django.conf import settings

# --------------------------------------------------------------
# 3rd Party imports
# --------------------------------------------------------------
from rest_framework import status
from rest_framework.exceptions import ValidationError


class AccountOwnershipException(ValidationError):
    default_detail = "Account does not belong to user"
```
***
***
## Test our endpoint
We can now test our endpoints. We already have most of the boilerplate endpoints already working so I'll walk you through how everything works.

1) Use the following code to enter into the api container.
```
docker exec -it hashgraphhub-api-1 bash

```

2) Use the following code to create a new user:

```
http post http://api:8000/api/v1/auth/users/ email=bobby@didcoding.com first_name=Bobby last_name=Stearman password=fredfred1
```

3) Login with the following command:

```
http post http://api:8000/api/v1/auth/token/login/ email=bobby@didcoding.com password=fredfred1
```
>Note make a note of your new token and add it to the import wallet endpoint.

4) Now import a wallet with the following command.
```
http http://api:8000/api/v1/account/ 'Authorization: Token <your token>' external_id=<your wallet id> private_key=<your private key>
```
***
***
