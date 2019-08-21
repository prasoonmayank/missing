from rest_framework import serializers
from mpeople.models import User, MissingPerson

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class MPeopleSerializer(serializers.ModelSerializer):
    class Meta:
        model = MissingPerson
        fields = '__all__'
