# <span style="color:#f9b000">REST API</span>

![REST API](https://static.didcoding.com/media/tutorials/hashgraphhub_how_to/how_to_build_a_hedera_app_3.jpg "REST API")


<span style="color:#f9b000">Feel free to use this repo as a 'cheat sheet'</span>
***
***

## Get started

In the last module we created a simple Hedera account query endpoint. We can now add this to our project endpoints to enable users to import a wallet.

1) Go ahead and create a serializer dir, __init__.py and account.py file with the following code.
```
cd app/backend/users
mkdir serializers && cd serializers
echo This is our account file > account.py  && echo '' > __init__.py
cd ..
cd tests
echo this is our account test > account.py
cd ..
echo This is our exceptions file > exceptions.py  && echo This is our permissions file > permissions.py
cd views
echo This is our account file > account.py
cd ../../../..
```

2) Open the new /app/backend/users/serializers/account.py file and add the following code.

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

		#check if external_id already exists
		acc = Account.objects.filter(external_id = operator)
		if acc.exists():
			raise ValidationError("Validation Error: External id is already used.")
		
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
		acc = Account.objects.create(
			user = request.user, **data
		)
		return acc



class AccountSerializer(serializers.ModelSerializer):

	class Meta:
		model = Account
		fields = (
			'id',
			'external_id',
		)
```

3) We now Open the new /app/backend/users/serializers/__init__.py file and add the following code.
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

4) Open the new /app/backend/users/views/account.py file and add the following code.

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
        qs = self.queryset.filter(user = request.user)
        serializer = self.get_serializer_class()(qs, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        obj = get_object_or_404(self.queryset, pk = pk)
        serializer = self.get_serializer_class()(obj)
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
            return JsonResponse({"result": "error","message": "Json decoding error"}, status= 400)
```
5) We now Open the new /app/backend/users/views/__init__.py file and add the following code.
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
6) We can now add our new view to our router. Open /app/backend/users/routers and add the following code.
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
        try:
            pk = view.kwargs["pk"]
            user_id = request.user.id
            if not self._does_account_belong_to_user(pk, user_id):
                raise AccountOwnershipException()
            return True
        except KeyError:
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
# 3rd Party imports
# --------------------------------------------------------------
from rest_framework.exceptions import ValidationError


class AccountOwnershipException(ValidationError):
    default_detail = "Account does not belong to user"
```

9) Open /app/backend/users/tests/account.py and add the following code.
```
# --------------------------------------------------------------
# Python imports
# --------------------------------------------------------------
from datetime import datetime
import json

# --------------------------------------------------------------
# Django imports
# --------------------------------------------------------------
from django.contrib.auth.hashers import make_password

# --------------------------------------------------------------
# App imports
# --------------------------------------------------------------
from users.models import CustomUser, Account

# --------------------------------------------------------------
# 3rd Party imports
# --------------------------------------------------------------
from rest_framework.test import APIClient
from rest_framework.test import APITestCase
from rest_framework.authtoken.models import Token
from rest_framework import status



class AccountTestCase(APITestCase):

    """
    Test suite for User management
    """
    def setUp(self):
        self.email = "test@didcoding.com"
        self.password = "fredfred1"
        self.test_user = CustomUser.objects.create(
            email= self.email,
            first_name= "Test",
            last_name="Case",
            password= make_password(self.password),
            dob= datetime.fromisoformat("1982-01-24 00:00:00+00:00"),
            is_active=True
            )

        #The app uses token authentication
        self.token, created = Token.objects.get_or_create(user = self.test_user)
        self.client = APIClient()
        # self.client.login(email=self.email, password = self.password)
        
        #We pass the token in all calls to the API
        self.header = f'Authorization: Token {self.token}'
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + self.token.key)

        self.data = {
            'external_id': '0.0.4563393',
            'private_key': '302e020100300506032b6570042204205f67e3dfcb36270864d68234bc2cc0d861e3b4b1ad100da12725a037375b04c3'
        }

        self.acc = Account.objects.create(
            user = self.test_user,
            external_id = '0.0.4563394',
            private_key= '302e020100300506032b6570042204205f67e3dfcb36270864d68234bc2cc0d861e3b4b1ad100da12725a037375b04c3'
        )

        self.url = "/api/v1/account/"

    def test_create_account(self):
        '''
        test Account create method with a valid Account ID
        '''
        response = self.client.post(self.url, self.data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_retrieve_account(self):
        '''
        test retrieving an Account
        '''
        response = self.client.get(f'{self.url}{self.acc.id}/' )
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_accounts(self):
        '''
        test retrieving an Account
        '''
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)


```

10) Open /app/backend/users/tests/__init__.py and add the following code.
```
# --------------------------------------------------------------
# App imports
# --------------------------------------------------------------
from users.tests.custom_user import CustomUserTestCase, SignUpTestCase, SignInTestCase
from users.tests.account import AccountTestCase


__all__ = [
    CustomUserTestCase,
    SignUpTestCase, 
    SignInTestCase,
    AccountTestCase
]
```
***
***
## Test our endpoint
We can now test our endpoints. We already have most of the boilerplate endpoints already working so I'll walk you through how everything works.

1) Use the following code to enter into the api container.
```
docker exec -it api bash

```

2) Use the following code to create a new user:

```
http post http://api:8000/api/v1/auth/users/ email=<your email> first_name=<your first name> last_name=<your last name> password=<your password>
```
3) You should receive an activation email. Please click the link to activate the new account.


4) Login with the following command:

```
http post http://api:8000/api/v1/auth/token/login/ email=<your email> password=<your password>
```
>Note make a note of your new token and add it to the import wallet endpoint.

5) Create a new testnet account via your Hedera wallet provider and make a note of the wallet id and private key.

6) Now import the wallet with the following command.
```
http post http://api:8000/api/v1/account/ 'Authorization: Token <your token>' external_id=<your wallet id> private_key=<your private key>
```
>Note make a note of your new account id.

7) Now test the retrieve endpoint.
```
http get http://api:8000/api/v1/account/<account id>/ 'Authorization: Token <your token>'
```
8) Now test the new get list endpoint.
```
http get http://api:8000/api/v1/account/ 'Authorization: Token <your token>'
```

***
***
