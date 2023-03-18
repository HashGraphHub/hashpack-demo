# --------------------------------------------------------------
# App imports
# --------------------------------------------------------------
from django.urls import path, re_path, include

# --------------------------------------------------------------
# Project imports
# --------------------------------------------------------------
from hashgraphhub.routers import router

urlpatterns = router.urls

urlpatterns += [
    re_path(r'^api/v1/auth/', include('djoser.urls')),
    re_path(r'^api/v1/auth/', include('djoser.urls.authtoken')),
]
