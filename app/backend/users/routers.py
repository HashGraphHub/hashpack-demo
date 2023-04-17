# --------------------------------------------------------------
# Django imports
# --------------------------------------------------------------
from django.urls import path, re_path, include

# --------------------------------------------------------------
# Project imports
# --------------------------------------------------------------
from hashgraphhub.routers import router

urlpatterns = router.urls