# --------------------------------------------------------------
# Django imports
# --------------------------------------------------------------
from django.urls import path

# --------------------------------------------------------------
# App imports
# --------------------------------------------------------------
from . import views

app_name = "users"

urlpatterns = [
	path('activate/<uidb64>/<token>/',views.activate, name='activate'),
]