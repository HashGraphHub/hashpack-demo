# --------------------------------------------------------------
# Python imports
# --------------------------------------------------------------
import os

# --------------------------------------------------------------
# Django imports
# --------------------------------------------------------------
from django.conf import settings

# --------------------------------------------------------------
# App imports
# --------------------------------------------------------------
from apis.hedera import client

# --------------------------------------------------------------
# 3rd party imports
# --------------------------------------------------------------
from hedera import (
    PrivateKey,
    Hbar,
)


client = client()


class HederaBase:
    '''
    Base methods for Hedera api calls
    '''

    def __init__ (self, *args, **kwargs):
        self.account_id = kwargs.get("account_id")
        self.operator = kwargs.get("operator", settings.HEDERA_OPERATOR_ID)
        self.operator_key = kwargs.get("operator_key", settings.HEDERA_OPERATOR_KEY)
        self.operator_private_key = kwargs.get("operator_private_key", settings.HEDERA_OPERATOR_PRIVATE_KEY)

    @property
    def get_client(self):
        '''
        Used to create a client object to sign transactions
        '''
        operator = self.get_account_id_object(self.operator)
        operator_private_key = self.get_private_key_object(self.operator_private_key)
        set_operator = client.setOperator(operator, operator_private_key)
        return set_operator

    @property
    def create_private_key(self)->PrivateKey:
        '''
        Used creates a new private key
        '''
        return PrivateKey.generate()
    
    def get_object_str_repr(self, obj)->str:
        '''
        Used to convert a Hedera object to str repr
        '''
        return obj.toString()
    
    def get_str_repr_object(self, obj, str):
        '''
        Used to convert a Hedera object to str repr
        '''
        if obj == Hbar:
            return obj.fromTinybars(qty)
        return obj.fromString(str)

    