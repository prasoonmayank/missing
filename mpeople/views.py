import os
# from rest_framework import viewsets
from rest_framework.views import APIView
from mpeople.models import MissingPerson, User
from mpeople.serializers import MPeopleSerializer, UserSerializer
from mpeople.img_compare import *
from rest_framework.response import Response
from django.conf import settings

# class MissingPeopleViewSet(viewsets.ModelViewSet):
#     queryset = MissingPerson.objects.all()
#     serializer_class = MPeopleSerializer

#     # def create(self, request, *args, **kwargs):

#     #     img = request.data["person_img"]
#     #     img_link = os.path.join(settings.BASE_DIR, 'images', img.name)
#     #     serializer = self.serializer_class(data=request.data)
#     #     serializer.is_valid(raise_exception=True)
#     #     serializer.save()
#     #     check_img(img_link)
#     #     print(extract_text_from_img(img_link))
#     #     return super().create(request, *args, **kwargs)

#     def check_img_text(self, request, *args, **kwargs):

#         p = MissingPerson.objects.get(id=self.kwargs["id"])
#         nm = p.person_img.name
#         img_link = os.path.join(settings.BASE_DIR, nm)
#         print(compare_image(img_link))
#         return Response()

# class UserViewset(viewsets.ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer

class TextViewSet(APIView):

    def post(self, request, *args, **kwargs):
        print(request.data)
        text = request.data["text"]
        choice_type = request.data["choice_type"]
        return_json = {}
        if choice_type == 100:
            return_json["choice_type"] = 0
            return_json["type"] = "list-button"
            return_json["return_text_list"] = ["Check missing people in the city","Check missing people in state", "Search a person from image", "Search a person name"]
        elif choice_type == 0:
            if text == "Check missing people in the city":
                return_json["choice_type"] = 1
                return_json["return_text_list"] = ["Show top 100 people", "Top 100 people images"]
                return_json["entry_type"] = "button"
            elif text == "Check missing people in state":
                return_json["choice_type"] = 2
                return_json["return_text_list"] = ["Show top 100 people", "Top 100 people images"]
                return_json["entry_type"] = "button"
            elif text == "Search a person from image":
                return_json["choice_type"] = 3
                return_json["return_text_list"] = ["Enter image to search"]
                return_json["entry_type"] = "file"
            elif text == "Search a person name":
                return_json["choice_type"] = 4
                return_json["return_text_list"] = ["Enter person name"]
                return_json["entry_type"] = "text"
        elif choice_type == 1:
            persons = MissingPerson.objects.filter(city=text)
            return_json["persons"] = [person.id for person in persons]
            if text == "Show top 100 people":
                return_json["choice_type"] = 5
                return_json["final_output"] = [person.name for person in persons]
                return_json["entry_type"] = "No more inputs"
            elif text == "Top 100 people images":
                return_json["choice_type"] = 6
                # Final output is top 100 images
                return_json["entry_type"] = "No more inputs"
        elif choice_type == 2:
            persons = MissingPerson.objects.filter(state=text)
            return_json["persons"] = [person.id for person in persons]
            if text == "Show top 100 people":
                return_json["choice_type"] = 7
                return_json["final_output"] = [person.name for person in persons]
                return_json["entry_type"] = "No more inputs"
            elif text == "Top 100 people images":
                return_json["choice_type"] = 8
                # Final output is top 100 images
                return_json["entry_type"] = "No more inputs"
        elif choice_type == 3:
            # Request data image
            img = request.data["img"]
            img_link = os.path.join(settings.BASE_DIR, 'images', img.name)
            compare_image_result = compare_image(img_link)
            if compare_image_result >= 0:
                person = MissingPerson.objects.get(id=compare_image_result)
                contact_persons = []
                text = ""
                for person in person.to_contact.all():
                    contact_person = {}
                    contact_person["name"] = person.name
                    contact_person["phone"] = person.phone
                    contact_person["email"] = person.email
                    text = text + person.name + ", " + str(person.phone) + ", " + str(person.email) + " and "
                return_json["choice_type"] = 12
                return_json["final_output"] = [f"Person found. His name is {person.person_name}. His age is {person.age}. He hails from {person.city} in {person.state}. If you found him, you can contact {text}"]
                return_json["entry_type"] = "No more inputs"
            else:
                return_json["choice_type"] = 13
                return_json["return_text_list"] = ["Person not found. I want to stop", "Person not found. I want to add person associated with this image"]
                return_json["entry_type"] = "button"
        elif choice_type == 4:
            persons = MissingPerson.objects.filter(person_name__contains=text)
            if persons.exists():
                return_json["choice_type"] = 9
                return_json["return_text_list"] = [person.name for person in persons]
                return_json["entry_type"] = "button"
            else:
                return_json["choice_type"] = 10
                return_json["final_text"] = "No person with the name found"
                return_json["entry_type"] = "No more inputs"
        elif choice_type == 9:
            person = MissingPerson.objects.get(person_name=text)
            serializer = MPeopleSerializer(person)
            return_json["choice_type"] = 11
            return_json["final_output"] = serializer.data
            return_json["entry_type"] = "No more inputs"
        elif choice_type == 13:
            if text == "Person not found. I want to stop":
                return_json["choice_type"] = 14
                return_json["final_text"] = "Cool"
                return_json["entry_type"] = "No more inputs"
            elif text == "Person not found. I want to add person associated with this image":
                return_json["choice_type"] = 15
                return_json["return_text_list"] = ["Please enter the name"]
                return_json["entry_type"] = "text"
        elif choice_type == 15:
            return_json["choice_type"] = 16
            return_json["return_text_list"] = ["Please enter age"]
            return_json["entry_type"] = "text"
        elif choice_type == 16:
            return_json["choice_type"] = 17
            return_json["return_text_list"] = ["Enter city"]
            return_json["entry_type"] = "text"
        elif choice_type == 17:
            return_json["choice_type"] = 18
            return_json["return_text_list"] = ["Enter state"]
            return_json["entry_type"] = "text"
        elif choice_type == 18:
            return_json["choice_type"] = 19
            return_json["return_text_list"] = ["Enter the contact person name"]
            return_json["entry_type"] = "text"
        elif choice_type == 19:
            return_json["choice_type"] = 20
            return_json["return_text_list"] = ["Enter contact person phone"]
            return_json["entry_type"] = "text"
        elif choice_type == 20:
            return_json["choice_type"] = 21
            return_json["return_text_list"] = ["Enter contact person email"]
            return_json["entry_type"] = "text"
            # At this point API call is made to add the missing person in the directory
        else:
            return_json["choice_type"] = 0
            return_json["return_text_list"] = ["Wrong input please enter again"]
        return Response(return_json)
