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