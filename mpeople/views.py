from rest_framework import viewsets
from rest_framework.views import APIView
from mpeople.models import MissingPerson, User
from mpeople.serializers import MPeopleSerializer, UserSerializer

class MissingPeopleViewSet(viewsets.ModelViewSet):
    queryset = MissingPerson.objects.all()
    serializer_class = MPeopleSerializer

class UserViewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
