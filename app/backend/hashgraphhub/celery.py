# --------------------------------------------------------------
# Python imports
# --------------------------------------------------------------
import os
from datetime import timedelta

# --------------------------------------------------------------
# 3rd party imports
# --------------------------------------------------------------
from celery import Celery

 
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'hashgraphhub.conf.dev')
app = Celery('hashgraphhub')
app.config_from_object('django.conf:settings', namespace='CELERY')
 
app.conf.timezone = 'Europe/London'

app.autodiscover_tasks()
