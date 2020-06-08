from django.db import models
from datetime import date
from django.urls import reverse
from django.contrib.auth.models import User
# Create your models here.


class User(models.Model):   
    uzytkownik =models.CharField(max_length = 20,blank=True,null=True)
    imie = models.CharField(max_length = 20,blank=True,null=True)
    nazwisko = models.CharField(max_length = 20,blank=True,null=True)
    email = models.CharField(max_length = 30,blank=True,null=True)
    def get_absolute_url(self):
        return reverse('post-detail',args=[str(self.id)])
    def __str__(self):
        return f'{self.data}'

class Article(models.Model):

    title = models.CharField(max_length=500, blank=True, null=True)
    slug = models.URLField(max_length=500)
    url = models.URLField(max_length=500)

    def __str__(self):
        return self.title
