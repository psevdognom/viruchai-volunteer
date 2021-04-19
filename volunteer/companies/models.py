from django.db import models

from .utils import UploadTo

# Create your models here.


class Candidate(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)
    bio = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to=UploadTo('photo_path'))
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class ElectionType(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return self.name


class Region(models.Model):
    name = models.CharField(max_length=100, blank=True, null=True)
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class District(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)
    active = models.BooleanField(default=True)
    info = models.TextField(blank=True, null=True)
    region = models.ForeignKey(Region, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Election(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)
    election_date = models.DateField(auto_now=False)
    type = models.ForeignKey(ElectionType, on_delete=models.CASCADE)

    def __str__(self):
        return self.name + ' ' + self.name


class Company(models.Model):
    district = models.ForeignKey(District, on_delete=models.CASCADE)
    election = models.ForeignKey(Election, on_delete=models.CASCADE)
    candidate = models.ForeignKey(Candidate, on_delete=models.CASCADE)
    name = models.CharField(max_length=50, blank=True, null=True)
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.candidate.name + ' ' + self.district.name

