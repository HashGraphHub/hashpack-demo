# --------------------------------------------------------------
# Python imports
# --------------------------------------------------------------
import logging

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
logger = logging.getLogger(__name__)

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

            logger.info(f"⚠️ Attempting hedera.Account.account_info_query()")
            #Call to hedera endpoint
            obj = AccountInfoQuery(
                ).setAccountId(account_id
                ).execute(client)
            
            logger.info(f"✅ Success hedera.Account.account_info_query()")

            return {"status":200, "obj": obj}
        except Exception as e:
            logger.info(f"❌ Error hedera.Account.account_info_query() Error = {e}")
            return {"status":400, "obj": e}
