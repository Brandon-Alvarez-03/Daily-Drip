from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers

router = routers.DefaultRouter()

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api/', include(('dailydrip.routers', 'dailydrip'), namespace='dailydrip-api')),
    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

