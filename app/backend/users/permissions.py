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

