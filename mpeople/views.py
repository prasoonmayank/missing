import os
from rest_framework import viewsets
from rest_framework.views import APIView
from mpeople.models import MissingPerson, User
from mpeople.serializers import MPeopleSerializer, UserSerializer
from mpeople.img_compare import *
from rest_framework.response import Response
from django.conf import settings

class MissingPeopleViewSet(viewsets.ModelViewSet):
    queryset = MissingPerson.objects.all()
    serializer_class = MPeopleSerializer

    # def create(self, request, *args, **kwargs):

    #     img = request.data["person_img"]
    #     img_link = os.path.join(settings.BASE_DIR, 'images', img.name)
    #     serializer = self.serializer_class(data=request.data)
    #     serializer.is_valid(raise_exception=True)
    #     serializer.save()
    #     check_img(img_link)
    #     print(extract_text_from_img(img_link))
    #     return super().create(request, *args, **kwargs)

    def check_img_text(self, request, *args, **kwargs):

        p = MissingPerson.objects.get(id=self.kwargs["id"])
        nm = p.person_img.name
        img_link = os.path.join(settings.BASE_DIR, nm)
        print(compare_image(img_link))
        return Response()

class UserViewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class TextViewSet(APIView):

    def post(self, request, *args, **kwargs):
        pass
