# --------------------------------------------------------------
# Python imports
# --------------------------------------------------------------
import logging
from datetime import datetime

# --------------------------------------------------------------
# Django imports
# --------------------------------------------------------------
from django.conf import settings

# --------------------------------------------------------------
# App imports
# --------------------------------------------------------------
from external_apis.hedera import HederaBase
from external_apis.hedera import client

# --------------------------------------------------------------
# 3rd party imports
# --------------------------------------------------------------
from hedera import (
    AccountId, 
	AccountCreateTransaction,
    AccountInfoQuery,
    AccountUpdateTransaction, 
    Hbar,
    Key
    )

logger = logging.getLogger(__name__)
client = client()


class UpdateAccount(HederaBase):
    '''
    This handles all API calls to Stripes Customer endpoint
    '''

    def __init__(self, *args, **kwargs):
        super(Account, self).__init__(*args, **kwargs)
        
    
    def set_key(self, value:str)-> AccountUpdateTransaction:
        '''
        Docs - https://docs.hedera.com/hedera/sdks-and-apis/sdks/cryptocurrency/update-an-account
        '''
        client = self.get_client
        account_id = self.get_str_repr_object(AccountId, self.account_id)
        new_key = self.get_str_repr_object(Key, value)

        account_query = Account().account_info_query()

        transaction = AccountUpdateTransaction(
            ).setAccountId(account_id
            ).setKey(new_key)
        
        obj = transaction.freezeWith(client
            ).sign(account_query.key
            ).sign(new_key
            ).execute(client)

        return obj
    
    def set_receiver_signature_required(self, value:bool)-> AccountUpdateTransaction:
        '''
        Docs - https://docs.hedera.com/hedera/sdks-and-apis/sdks/cryptocurrency/update-an-account
        '''
        client = self.get_client
        account_id = self.get_str_repr_object(AccountId, self.account_id)
        account_query = Account().account_info_query()

        transaction = AccountUpdateTransaction(
            ).setAccountId(account_id
            ).setReceiverSignatureRequired(str(value))
        
        obj = transaction.freezeWith(client
            ).sign(account_query.key
            ).execute(client)

        return obj
    
    def set_max_automatic_token_association(self, value:int)-> AccountUpdateTransaction:
        '''
        Docs - https://docs.hedera.com/hedera/sdks-and-apis/sdks/cryptocurrency/update-an-account
        '''
        client = self.get_client
        account_id = self.get_str_repr_object(AccountId, self.account_id)
        account_query = Account().account_info_query()

        transaction = AccountUpdateTransaction(
            ).setAccountId(account_id
            ).setMaxAutomaticTokenAssociations(value)
        
        obj = transaction.freezeWith(client
            ).sign(account_query.key
            ).execute(client)

        return obj
    

    def set_account_memo(self, value:int)-> AccountUpdateTransaction:
        '''
        Docs - https://docs.hedera.com/hedera/sdks-and-apis/sdks/cryptocurrency/update-an-account
        '''
        client = self.get_client
        account_id = self.get_str_repr_object(AccountId, self.account_id)
        account_query = Account().account_info_query()

        transaction = AccountUpdateTransaction(
            ).setAccountId(account_id
            ).setAccountMemo(value)
        
        obj = transaction.freezeWith(client
            ).sign(account_query.key
            ).execute(client)

        return obj
    
    def set_auto_renew_period(self, value:datetime)-> AccountUpdateTransaction:
        '''
        Docs - https://docs.hedera.com/hedera/sdks-and-apis/sdks/cryptocurrency/update-an-account
        '''
        client = self.get_client
        account_id = self.get_str_repr_object(AccountId, self.account_id)
        account_query = Account().account_info_query()

        transaction = AccountUpdateTransaction(
            ).setAccountId(account_id
            ).setAutoRenewPeriod(value.isoformat())
        
        obj = transaction.freezeWith(client
            ).sign(account_query.key
            ).execute(client)

        return obj
    

    def set_staked_account_id(self, value:str)-> AccountUpdateTransaction:
        '''
        Docs - https://docs.hedera.com/hedera/sdks-and-apis/sdks/cryptocurrency/update-an-account
        '''
        client = self.get_client
        account_id = self.get_str_repr_object(AccountId, self.account_id)
        account_query = Account().account_info_query()

        transaction = AccountUpdateTransaction(
            ).setAccountId(account_id
            ).setStakedAccountId(self.get_str_repr_object(AccountId, value))
        
        obj = transaction.freezeWith(client
            ).sign(account_query.key
            ).execute(client)

        return obj
    

    def set_staked_node_id(self, value:str)-> AccountUpdateTransaction:
        '''
        Docs - https://docs.hedera.com/hedera/sdks-and-apis/sdks/cryptocurrency/update-an-account
        '''
        client = self.get_client
        account_id = self.get_str_repr_object(AccountId, self.account_id)
        account_query = Account().account_info_query()

        transaction = AccountUpdateTransaction(
            ).setAccountId(account_id
            ).setStakedNodeId(value)
        
        obj = transaction.freezeWith(client
            ).sign(account_query.key
            ).execute(client)

        return obj
    

    def set_decimal_staking_reward(self, value:bool)-> AccountUpdateTransaction:
        '''
        Docs - https://docs.hedera.com/hedera/sdks-and-apis/sdks/cryptocurrency/update-an-account
        '''
        client = self.get_client
        account_id = self.get_str_repr_object(AccountId, self.account_id)
        account_query = Account().account_info_query()

        transaction = AccountUpdateTransaction(
            ).setAccountId(account_id
            ).setDeclineStakingReward(str(value))
        
        obj = transaction.freezeWith(client
            ).sign(account_query.key
            ).execute(client)

        return obj
    

    def set_expiration_time(self, value:datetime)-> AccountUpdateTransaction:
        '''
        Docs - https://docs.hedera.com/hedera/sdks-and-apis/sdks/cryptocurrency/update-an-account
        '''
        client = self.get_client
        account_id = self.get_str_repr_object(AccountId, self.account_id)
        account_query = Account().account_info_query()

        transaction = AccountUpdateTransaction(
            ).setAccountId(account_id
            ).setExpirationTime(value.isoformat())
        
        obj = transaction.freezeWith(client
            ).sign(account_query.key
            ).execute(client)

        return obj



class Account(HederaBase):
    '''
    This handles all API calls to Stripes Customer endpoint
    '''

    def __init__(self, *args, **kwargs):
        super(Account, self).__init__(*args, **kwargs)


    def account_create_transaction(self, key:str) -> str:
        '''
        Docs - https://docs.hedera.com/hedera/sdks-and-apis/sdks/cryptocurrency/create-an-account
        '''
        client = self.get_client

        initial_balance = settings.HEDERA_INITIAL_BALANCE

        public_key = self.get_public_key(key)

        obj = AccountCreateTransaction(
            ).setKey(public_key
            ).setInitialBalance(
                self.get_str_repr_object(Hbar, initial_balance)
            ).execute(client)
        
        return self.get_object_str_repr(obj.getReceipt(client).accountId)
    
    def account_info_query(self):
        '''
        Docs - https://docs.hedera.com/hedera/sdks-and-apis/sdks/cryptocurrency/get-account-info
        '''
        account_id = self.get_str_repr_object(AccountId, self.account_id)
        client = self.get_client
        
        #Call to hedera endpoint
        obj = AccountInfoQuery(
            ).setAccountId(account_id
            ).execute(client)
        return obj
    
    def account_update_transaction(self, method, value):
        '''
        Docs - https://docs.hedera.com/hedera/sdks-and-apis/sdks/cryptocurrency/update-an-account
        '''
        get_method = getattr(UpdateAccount, method)
        obj = get_method(value)
        return obj
    

    
