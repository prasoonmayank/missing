from django.urls import path, include
from rest_framework import routers
from mpeople.views import *

r = routers.DefaultRouter()
# r.register(r'mpersons', MissingPeopleViewSet)
# r.register(r'users', UserViewset)

urlpatterns = [
    path('', include(r.urls)),
    # path('check_img/<int:id>/', MissingPeopleViewSet.as_view({'get':'check_img_text'})),
    path('msg/', TextViewSet.as_view(), name='send_receive_msg'),
]
