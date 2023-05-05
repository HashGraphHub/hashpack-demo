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
from users.models import CustomUser

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

        self.url = "/api/v1/account/"

    def test_create_account(self):
        '''
        test Account create method with a valid Account ID
        '''
        response = self.client.post(self.url, self.data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

