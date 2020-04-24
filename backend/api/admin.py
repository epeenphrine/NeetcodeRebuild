


from django.contrib import admin
from .models import Data, Project, About, ImageUpload,TweetApi 

# Register your models here.

admin.site.register(Data)
admin.site.register(Project)
admin.site.register(About)
admin.site.register(ImageUpload)
admin.site.register(TweetApi)