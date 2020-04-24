from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from .models import Data, About, Project, ImageUpload, TweetApi

## convert sql to json and vice versa
# About Serializer
class AboutSerializer(serializers.ModelSerializer):
  '''about serializer'''
  class Meta:
    model = About

    fields = '__all__'
# Data Serializer
class DataSerializer(serializers.ModelSerializer):
  class Meta:
    model = Data
    fields = '__all__'
# Project Serializer
class ProjectSerializer(serializers.ModelSerializer):
  class Meta:
    model = Project
    fields = '__all__'
class TweetSerializer(serializers.ModelSerializer):
  class Meta:
    model = TweetApi
    fields = '__all__' 
    
# Image Serializer
class ImageUploadSerilializer(serializers.ModelSerializer):
  class Meta:
    model = ImageUpload
    fields = '__all__'
# User Serializer
class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id', 'username', 'email')

# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id', 'username', 'email', 'password')
    extra_kwargs = {'password': {'write_only': True}}

  def create(self, validated_data):
    user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])

    return user

# Login Serializer
class LoginSerializer(serializers.Serializer):
  username = serializers.CharField()
  password = serializers.CharField()

  def validate(self, data):
    user = authenticate(**data)
    if user and user.is_active:
      return user
    raise serializers.ValidationError("Incorrect Credentials")