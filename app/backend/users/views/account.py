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
            serializer = self.get_serializer_class(data=data)
            if serializer.is_valid(raise_exception=True):
                account = serializer.create_account(request, data)
                return Response(AccountSerializer(account).data)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except JSONDecodeError:
            return JsonResponse({"result": "error","message": "Json decoding error"}, status= 400)