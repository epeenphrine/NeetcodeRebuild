from rest_framework import routers
from .api import DataViewset, RegisterAPI, LoginAPI, UserAPI, AboutViewset, ProjectViewset, ImageViewset, TweetViewset
from django.urls import path, include
from knox import views as knox_views

app_name = 'api'

##viewset api routing
router = routers.DefaultRouter()
router.register('data', DataViewset, 'Data')
router.register('about', AboutViewset, 'About')
router.register('project', ProjectViewset, 'Project')
router.register('images', ImageViewset, 'Image')
router.register('tweet', TweetViewset, 'tweet')

##non viewset api routing 
urlpatterns = [
    path('auth', include('knox.urls')),
    path('auth/register', RegisterAPI.as_view()),
    path('auth/login', LoginAPI.as_view()),
    path('auth/user', UserAPI.as_view()),
    path('auth/logout', knox_views.LogoutView.as_view(), name='knox_logout'),
]

urlpatterns += router.urls
