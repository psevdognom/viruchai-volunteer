from django.db import models

# Create your models here.


class Candidate(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)
    bio = models.TextField(blank=True, null=True)
    image = models.ImageField()
    active = models.BooleanField(default=True)


class ElectionType(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)


class Election(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)
    election_date = models.DateField(auto_now=False)
    type = models.ForeignKey(ElectionType, on_delete=models.CASCADE)



class Region(models.Model):
    name = models.CharField(max_length=100, blank=True, null=True)
    active = models.BooleanField(default=True)


class District(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)
    active = models.BooleanField(default=True)
    info = models.TextField(blank=True, null=True)
    region = models.ForeignKey(Region, on_delete=models.CASCADE)


class Company(models.Model):
    district = models.ForeignKey(District, on_delete=models.CASCADE)
    election = models.ForeignKey(Election, on_delete=models.CASCADE)
    candidate = models.ForeignKey(Candidate, on_delete=models.CASCADE)
    name = models.CharField(max_length=50, blank=True, null=True)

