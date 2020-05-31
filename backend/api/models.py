# Create your models here.
from django.db import models
from django.contrib.auth.models import User

from datetime import datetime
import time


# Create your models here.
''' every time you make changes here do this:
    python manage.py makemigrations
    python manage.py migrate
'''


## upload image 
class ImageUpload(models.Model):
    title = models.CharField(max_length=50)
    file =  models.ImageField(upload_to='images')
    
    def __str__(self):
        return self.title 

class Data(models.Model):
    ticker = models.CharField(max_length=200)
    x = models.TextField('x data')
    y = models.TextField('y data')
    owner = models.ForeignKey(
       User, related_name="data", on_delete=models.CASCADE, null=True)
    ## change how it's named in content management system
    class Meta:
        verbose_name_plural="Data"
    ## how to display the content
    def __str__(self):
        return self.ticker

##projects
class Project(models.Model):
    
    project = models.CharField(max_length=200)
    description = models.TextField('brief description')
    libraries = models.TextField('Libraries used:')
    language = models.CharField(max_length=200, default=1)
    url_slug = models.CharField(max_length=200, default=1)

    github = models.CharField(max_length=200, default=1)

    image = models.ImageField(upload_to="images")
    
    def __str__(self):
        return self.project

#About stuff 
class About(models.Model):
    role = models.CharField(max_length=200)
    languages = models.CharField(max_length=200)
    libraries = models.TextField('libraries')
        
    class Meta:
        verbose_name_plural = 'About Role'
    def __str__(self):
        return self.role
#tweet api
class TweetApi(models.Model):
    handle = models.CharField(max_length=400)
    tweet = models.TextField('tweet')
    date = models.DateField()
    url = models.CharField(max_length=400)
    tweet_id = models.CharField(max_length=400)

    class Meta:
        verbose_name_plural = 'Tweets'
    def __str__(self):
        display = f"{self.handle}, {self.date}, {self.tweet_id}"
        return display