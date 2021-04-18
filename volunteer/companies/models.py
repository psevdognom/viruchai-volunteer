from django.db import models

# Create your models here.

class District(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)

class Company(models.Model):
    pass