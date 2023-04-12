from .common import *

from pathlib import Path
from dotenv import load_dotenv
import os
import socket
load_dotenv()

DEBUG = int(os.environ.get("DEBUG", default=0))
ALLOWED_HOSTS = os.environ.get("DJANGO_ALLOWED_HOSTS").split(" ")
PRODUCTION = 0

# Application definition
RUN_SERVER_PORT = 8000

SUPER_USER_NAME = os.environ.get("SUPER_USER_NAME")
SUPER_USER_PASSWORD = os.environ.get("SUPER_USER_PASSWORD")
SUPER_USER_FIRST_NAME = os.environ.get("SUPER_USER_FIRST_NAME")
SUPER_USER_LAST_NAME = os.environ.get("SUPER_USER_LAST_NAME")

# --------------------------------------------------------------
# EMAIL SETTINGS
# --------------------------------------------------------------
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = os.environ.get("EMAIL_HOST")
EMAIL_PORT = os.environ.get("EMAIL_PORT")
EMAIL_USE_TLS = os.environ.get("EMAIL_USE_TLS", True)
EMAIL_HOST_USER = os.environ.get("DONOT_REPLY_EMAIL")
DISPLAY_NAME = os.environ.get("EMAIL_DISPLAY_NAME")
EMAIL_HOST_PASSWORD = os.environ.get("EMAIL_PASSWORD")
# --------------------------------------------------------------
# END EMAIL SETTINGS
# --------------------------------------------------------------

# --------------------------------------------------------------
# DATABASE SETTINGS
# --------------------------------------------------------------
DATABASES = {
    "default": {
        "ENGINE": os.environ.get("DB_ENGINE", "django.db.backends.sqlite3"),
        "NAME": os.environ.get("DB_NAME", BASE_DIR / "db.sqlite3"),
        "USER": os.environ.get("DB_USER", "user"),
        "PASSWORD": os.environ.get("DB_PASSWORD", "password"),
        "HOST": os.environ.get("DB_HOST", "localhost"),
        "PORT": os.environ.get("DB_PORT", "5432"),
    }
}
# --------------------------------------------------------------
# END DATABASE SETTINGS
# --------------------------------------------------------------


# --------------------------------------------------------------
# STATIC FILE SETTINGS
# --------------------------------------------------------------
STATICFILES_DIRS = [
        os.path.join(BASE_DIR,'static'),
        os.path.join(BASE_DIR,'media'),
        ]

STATIC_URL = '/static/'
MEDIA_URL = '/media/'

STATIC_ROOT = os.path.join(BASE_DIR,'static_cdn')
MEDIA_ROOT = os.path.join(BASE_DIR,'media_cdn')

# --------------------------------------------------------------
# END STATIC FILE SETTINGS
# --------------------------------------------------------------


# --------------------------------------------------------------
# HEDERA SETTINGS
# --------------------------------------------------------------
HEDERA_OPERATOR_ID =  os.environ.get('OPERATOR_ID')
HEDERA_OPERATOR_KEY = os.environ.get('OPERATOR_KEY')
HEDERA_OPERATOR_PRIVATE_KEY = os.environ.get('OPERATOR_PRIVATE_KEY')
HEDERA_ENV = os.environ.get('HEDERA_ENV')
# --------------------------------------------------------------
# END HEDERA SETTINGS
# --------------------------------------------------------------

# --------------------------------------------------------------
# LOGGING SETTINGS
# --------------------------------------------------------------
LOGFILEPATH = os.environ.get('LOGFILEPATH')
CELERYLOGFILEPATH = os.environ.get('CELERYLOGFILEPATH')

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'verbose': {
            'format': '{levelname} {asctime} {module} {process:d} {thread:d} {message}',
            'style': '{',
        },
        'simple': {
            'format': '{levelname} {message}',
            'style': '{',
        },
    },
    'filters': {
        'require_debug_true': {
            '()': 'django.utils.log.RequireDebugTrue',
        },
    },
    'handlers': {
        'console': {
            'level': 'INFO',
            'filters': ['require_debug_true'],
            'class': 'logging.StreamHandler',
            'formatter': 'simple'
        },
        'mail_admins': {
            'level': 'ERROR',
            'class': 'django.utils.log.AdminEmailHandler',
        }
    },
    'loggers': {
        'django': {
            'handlers': ['console'],
            'propagate': True,
        },
        'django.request': {
            'handlers': ['mail_admins'],
            'level': 'ERROR',
            'propagate': False,
        },
        'hashgraphhub.custom': {
            'handlers': ['console', 'mail_admins'],
            'level': 'INFO',

        }
    }
}

# --------------------------------------------------------------
# END LOGGING SETTINGS
# --------------------------------------------------------------

# --------------------------------------------------------------
# CORS SETTINGS
# --------------------------------------------------------------
CORS_ORIGIN_WHITELIST = [
    'http://localhost:3000',
    'http://app:3000'
]

CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

CORS_ALLOW_CREDENTIALS = True
# --------------------------------------------------------------
# END CORS SETTINGS
# --------------------------------------------------------------