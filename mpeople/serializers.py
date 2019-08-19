from rest_framework import serializers
from mpeople.models import User, MPeople

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class MPeopleSerializer(serializers.ModelSerializer):
    class Meta:
        model = MPeople
        fields = '__all__'
