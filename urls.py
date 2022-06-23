from store.admin import admin_site
from django.urls import path, include

urlpatterns = [
    path('store-api/', include('store.urls')),
    path('contactforms-api/', include('contactforms.urls')),
    path('', admin_site.urls),
]
