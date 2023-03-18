# --------------------------------------------------------------
# Python imports
# --------------------------------------------------------------
from datetime import datetime

# --------------------------------------------------------------
# Django imports
# --------------------------------------------------------------
from django.test import TestCase
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
from rest_framework import status



class CustomUserTestCase(TestCase):
    """
    Test suite for CustomUser
    """
    def setUp(self):

        self.test_user = CustomUser.objects.create(
            email= "test@didcoding.com",
            first_name= "Test",
            last_name="Case",
            password= make_password("fredfred1"),
            dob= datetime.fromisoformat("1982-01-24 00:00:00+00:00")
            )


    def test_calculate_age(self):
        '''
        test the get age method
        '''
        self.assertEqual(self.test_user.calculate_age(), 41)


class SignUpTestCase(APITestCase):

    """
    Test suite for User management
    """
    def setUp(self):
        self.client = APIClient()
        self.data = {
            "account_id": "0.0.112233"
        }
        self.url = "/signup/"
        user = User(username="0.0.332211")
        user.set_password("0.0.332211")
        user.save()

    def test_create_user(self):
        '''
        test SignUpViewSet create method with a valid Account ID
        '''
        data = self.data
        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(User.objects.count(), 2)

    
    def test_create_user_with_duplicate_account_id(self):
        '''
        test SignUpViewSet create method with a duplicate account ID
        '''
        data = self.data
        data["account_id"] = "0.0.332211"
        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)


    def test_create_user_without_account_id(self):
        '''
        test SignUpViewSet create method without an Account ID
        '''
        data = self.data
        data.pop("account_id")
        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
