from .models import User
from dailydrip.models import Day
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.settings import api_settings
from django.contrib.auth.models import update_last_login
from django.core.exceptions import ObjectDoesNotExist
    
class UserSerializer(serializers.ModelSerializer):
    days = serializers.PrimaryKeyRelatedField(many=True, queryset=Day.objects.all())   
    class Meta:
        model = User
        fields = ['id','username', 'email', 'avatar', 'date_joined', 'updated_at', 'days']

class LoginSerializer(TokenObtainPairSerializer):

    def validate(self, attrs):
        data = super().validate(attrs)

        refresh = self.get_token(self.user)

        data['user'] = UserSerializer(self.user).data
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)

        if api_settings.UPDATE_LAST_LOGIN:
            update_last_login(None, self.user)

        return data

class RegisterSerializer(UserSerializer):
    password = serializers.CharField(max_length=128, min_length=8, write_only=True, required=True)
    username = serializers.CharField(max_length=128, required=True)
    email = serializers.CharField(max_length=128, required=True)

    class Meta:
        model = User
        fields = ['id','username', 'email', 'avatar', 'date_joined', 'password']

    def create(self, validated_data):
        try:
            user = User.objects.get(username=validated_data['username'])
            user = None
        except ObjectDoesNotExist:
            user = User.objects.create_user(**validated_data)
        return user

    