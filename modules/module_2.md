# <span style="color:#f9b000">Hedera API</span>

![Hedera API](https://static.didcoding.com/media/tutorials/hashgraphhub_how_to/how_to_build_a_hedera_app_2.jpg "Hedera API")


<span style="color:#f9b000">Feel free to use this repo as a 'cheat sheet'</span>
***
***

## Get started

In this module we will begin building our Hedera API connector. We will be using the python SDK that is already installed in our docker container.

1) Use the following code to enter into the api container.
```
docker exec -it hashgraphhub_api_1 bash

```

2) Go ahead and start a new app called external_apis
```
python manage.py startapp external_apis
exit
```
>Note: You should now have a new directory in /app/backend. We will use this directory to manage...You guessed it...External API's :)

3) Use the following code to create a directories and files we need for Hedera

```
cd app/backend/external_apis
mkdir hedera
cd hedera
echo This is our client file > client.py && echo This is our mixin file > mixins.py && echo '' > __init__.py
mkdir endpoints
cd endpoints
echo This is our account endpoint file > account.py

```
***
***

## Start coding
Let's start with the client.py file. Hedera has 3 environments: Testnet, Mainnet and Previewnet. We need a function that will allow us to work in the environment defined in our env file. 
>Note: We will be using testnet throughout this tutorial.

1) Go ahead and open /app/backend/external_apis/hedera/client.py and add the following code.

```
from django.conf import settings
#We are importing Client from the built in hedera SDK
from hedera import Client

def client():
    '''
    Used to configure the correct hedera environment
    '''
    env = settings.HEDERA_ENV
    match env:
        #Note: 'testnet' is default if nothing is passed in via .env
        case "testnet":
            return Client.forTestnet()
        case "mainnet":
            return Client.forMainnet()
        case _:
            return Client.forPreviewnet()
```

2) Go ahead and open /app/backend/external_apis/hedera/mixins.py and use the following code to create a base class we can inherit from.
```
# --------------------------------------------------------------
# Django imports
# --------------------------------------------------------------
from django.conf import settings

# --------------------------------------------------------------
# App imports
# --------------------------------------------------------------
from external_apis.hedera import client

# --------------------------------------------------------------
# 3rd party imports
# --------------------------------------------------------------
from hedera import (
    PrivateKey,
    AccountId,
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
        operator = self.get_str_repr_object(AccountId, self.operator)
        operator_private_key = self.get_str_repr_object(PrivateKey, self.operator_private_key)
        set_operator = client.setOperator(operator, operator_private_key)
        return set_operator

    @property
    def create_private_key(self)->PrivateKey:
        '''
        Used to create a new private key
        '''
        return PrivateKey.generate()
    
    def get_public_key(self, key)->str:
        '''
        Used to get public key from privatekey
        '''
        return key.getPublicKey()
    
    def get_object_str_repr(self, obj)->str:
        '''
        Used to convert a Hedera object to str repr
        '''
        return obj.toString()
    
    def get_str_repr_object(self, obj, str):
        '''
        Used to convert str repr to Hedera obj
        '''
        if obj == Hbar:
            return obj.fromTinybars(str)
        return obj.fromString(str)
```

3) Go ahead and open /app/backend/external_apis/hedera/endpoints/account.py and use the following code.
```
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
    
```

4) We can now add our new classes to the __init__.py file. Go ahead and open /app/backend/external_apis/hedera/__init__.py and use the following code.
```
# --------------------------------------------------------------
# App imports
# --------------------------------------------------------------
from external_apis.hedera.client import client 
from external_apis.hedera.mixins import HederaBase

from external_apis.hedera.endpoints.account import Account as HederaAccount

__all__ = [
    client,
    HederaBase,
    HederaAccount
]
```

***
***
