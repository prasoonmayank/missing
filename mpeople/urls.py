from django.urls import path, include
from rest_framework import routers
from mpeople.views import MissingPeopleViewSet, UserViewset

r = routers.DefaultRouter()
r.register(r'mpersons', MissingPeopleViewSet)
r.register(r'users', UserViewset)

urlpatterns = [
    path('', include(r.urls))
]
