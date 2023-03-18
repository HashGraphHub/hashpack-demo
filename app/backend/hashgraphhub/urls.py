# --------------------------------------------------------------
# Django imports
# --------------------------------------------------------------
from django.urls import path, include, re_path
from django.conf.urls.static import static
from django.conf import settings
from django.contrib import admin

from users.routers import urlpatterns as users_urls

api_urls =  users_urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(api_urls)),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)