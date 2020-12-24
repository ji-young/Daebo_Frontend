"""bigdageeta URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include

from drf_yasg.views import get_schema_view
from rest_framework.permissions import AllowAny
from drf_yasg import openapi


schema_view_v1 = get_schema_view(
    openapi.Info(
        title="Bigdaheeta Open API",
        default_version='v1',
        description="안녕하세요. Bigdaheeta Open API 문서 페이지 입니다.",
    ),
    validators=['flex'], #'ssv'],
    public=True,
    permission_classes=(AllowAny,),
)


urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^rest-auth/', include('rest_auth.urls')),
    url(r'^rest-auth/registration/', include('rest_auth.registration.urls')),
    url(r'^redoc/v1/$', schema_view_v1.with_ui('redoc', cache_timeout=0), name='schema-redoc-v1'),
    url(r'^swagger(?P<format>\.json|\.yaml)/v1$', schema_view_v1.without_ui(cache_timeout=0), name='schema-json'),
    url(r'^swagger/v1/$', schema_view_v1.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    url(r'^recipe/',include('recipes.urls')),
]