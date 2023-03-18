# --------------------------------------------------------------
# Django imports
# --------------------------------------------------------------
from django.conf import settings

# --------------------------------------------------------------
# 3rd party imports
# --------------------------------------------------------------
from hedera import Client

def client():
    '''
    Used to configure the correct hedera environment
    '''
    env = settings.HEDERA_ENV
    match env:
        case "testnet":
            return Client.forTestnet()
        case "mainnet":
            return Client.forMainnet()
        case _:
            return Client.forPreviewnet()
