import sys, os
sys.path.append('.')

from rest_framework import viewsets, permissions, generics
from knox.models import AuthToken
from rest_framework.response import Response

from collections import namedtuple
from .models import Data, About, Project, ImageUpload, TweetApi
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer, DataSerializer, AboutSerializer, ProjectSerializer,ImageUploadSerilializer, TweetSerializer

import subprocess
## VIEWSETS only get requests 
#data viewset
class DataViewset(viewsets.ModelViewSet):
    queryset = Data.objects.all()
    permission_classes= [
        permissions.AllowAny
    ]

    serializer_class = DataSerializer
    http_method_names = ['get']

#About Viewset
class AboutViewset(viewsets.ModelViewSet):
  queryset = About.objects.all()
  permission_class = [
    permissions.AllowAny
  ]
  serializer_class = AboutSerializer
  http_method_names = ['get']

#Project viewset
class ProjectViewset(viewsets.ModelViewSet):
  queryset = Project.objects.all()
  permission_class = [
    permissions.AllowAny
  ]
  serializer_class = ProjectSerializer
  http_method_names = ['get']

#Image Upload viewset
class ImageViewset(viewsets.ModelViewSet):
  queryset = ImageUpload.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = ImageUploadSerilializer
  http_method_names = ['get']

class TweetViewset(viewsets.ModelViewSet):
  queryset = TweetApi.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = TweetSerializer
  http_method_names = ['get', 'post']

##API resposne no database
#class ScrapeApi(generics.ListAPIView):
    #def post(self,request):
        #queryset = ''
        #search = self.request.POST.get('search','')
        #print(f'{self.request.POST}')
        #print(f"ScrapeApi running with search: {search}")
        #res = scrape(search) ## return dictionary
        #return Response(
            #{
                #"search": search,
                #"scraped": res
            #}
        #)

## API (authentication)
# register api
class RegisterAPI(generics.GenericAPIView):
  serializer_class = RegisterSerializer

  def post(self, request, *args, **kwargs):
    serializer = self.get_serializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.save()
    return Response({
      "user": UserSerializer(user, context=self.get_serializer_context()).data,
      "token": AuthToken.objects.create(user)[1]
    })

# Login API
class LoginAPI(generics.GenericAPIView):
  serializer_class = LoginSerializer

  def post(self, request, *args, **kwargs):
    serializer = self.get_serializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.validated_data
    return Response({
      "user": UserSerializer(user, context=self.get_serializer_context()).data,
      "token": AuthToken.objects.create(user)[1]
    })

# Get User API
class UserAPI(generics.RetrieveAPIView):
  permission_classes = [
    permissions.IsAuthenticated,
  ]
  serializer_class = UserSerializer

  def get_object(self):
    return self.request.user  