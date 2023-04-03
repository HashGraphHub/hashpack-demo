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


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.1/howto/static-files/

STATICFILES_DIRS = [
        os.path.join(BASE_DIR,'static'),
        os.path.join(BASE_DIR,'media'),
        ]

STATIC_URL = '/static/'
MEDIA_URL = '/media/'

STATIC_ROOT = os.path.join(BASE_DIR,'static_cdn')
MEDIA_ROOT = os.path.join(BASE_DIR,'media_cdn')

HEDERA_OPERATOR_ID =  os.environ.get('OPERATOR_ID')
HEDERA_OPERATOR_KEY = os.environ.get('OPERATOR_KEY')
HEDERA_OPERATOR_PRIVATE_KEY = os.environ.get('OPERATOR_PRIVATE_KEY')
HEDERA_ENV = os.environ.get('HEDERA_ENV')

DJOSER = {
    "USER_ID_FIELD": "email",
    "LOGIN_FIELD": "email",
    "SEND_ACTIVATION_EMAIL": True,
    "ACTIVATION_URL": "/activate/",
    "ACTIVATION_REDIRECT_URL": "http://localhost:3000/profile/",
    "ACTIVATION_REDIRECT_FAIL_URL": "http://localhost:3000",
    "PASSWORD_REDIRECT_URL": "http://localhost:3000",
    "PASSWORD_REDIRECT_FAIL_URL": "http://localhost:3000",
    'EMAIL': {
            'activation': 'users.views.ActivationEmail',
            "password_reset": "users.views.PasswordResetEmail",
    }
    
}