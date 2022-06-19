from django.db import models
import datetime

# Create your models here.
class seller(models.Model):
    name = models.CharField(max_length=50,default="Vikas Sharma")
    address = models.CharField(max_length=150,default="IFCO Chowk, Delhi")
    phone = models.IntegerField(default='+91 8171415434')
    date = models.DateField(default=datetime.datetime.date)

class buyer(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=150)
    phone = models.IntegerField()
    purchase_date = models.DateField(default=datetime.datetime.now)

class producat(models.Model):
    img = models.ImageField(upload_to='media/')
    name = models.CharField(max_length=100)
    dis = models.TextField(max_length=500)
    price = models.CharField(max_length=100)

from django.db import models

# Create your models here.

class Member(models.Model):
    firstname = models.CharField(max_length=40)
    lastname = models.CharField(max_length=40)

    def __str__(self):
        return self.firstname + " " + self.lastname
