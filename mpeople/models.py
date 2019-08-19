from django.db import models

class User(models.Model):
    name = models.CharField(max_length=255)
    phone = models.IntegerField()
    email = models.EmailField()

class MissingPerson(models.Model):
    person_name = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    age = models.IntegerField()
    person_img = models.ImageField()
    image_description = models.TextField()
    to_contact = models.ManyToManyField(User)
