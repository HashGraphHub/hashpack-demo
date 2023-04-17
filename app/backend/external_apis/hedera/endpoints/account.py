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
    AccountInfoQuery,
    )

client = client()


class Account(HederaBase):
    '''
    This handles all API calls to Stripes Customer endpoint
    '''

    def __init__(self, *args, **kwargs):
        super(Account, self).__init__(*args, **kwargs)
    
    def account_info_query(self):

        '''
        Docs - https://docs.hedera.com/hedera/sdks-and-apis/sdks/cryptocurrency/get-account-info
        '''
        try:
            account_id = self.get_str_repr_object(AccountId, self.account_id)
            client = self.get_client
        
            #Call to hedera endpoint
            obj = AccountInfoQuery(
                ).setAccountId(account_id
                ).execute(client)

            return {"status":200, "obj": obj}
        except Exception as e:
            return {"status":400, "obj": e}
    