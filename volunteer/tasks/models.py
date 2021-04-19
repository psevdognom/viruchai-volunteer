from django.db import models

from authentication.models import User
from companies.models import Election, Company

# Create your models here.



class SkillCategory(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Skill(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    category = models.ForeignKey(SkillCategory, on_delete=models.CASCADE)

    def __str__(self):
        return self.category.name + ' ' + self.name


class SkillToUser(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    skill = models.ForeignKey(Skill, on_delete=models.CASCADE)
    created_date = models.DateTimeField(auto_now=True)


class Task(models.Model):
    name = models.CharField(max_length=50, null=True, blank=True)
    description = models.TextField(blank=True, null=True)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    created_date = models.DateTimeField(auto_now=True)
    updated_date = models.DateTimeField(auto_now_add=True)
    deadline = models.DateTimeField(auto_now=False)
    active = models.BooleanField(default=True)
    done = models.BooleanField(default=False)
    skills = models.ManyToManyField(Skill, through='SkillToTask')

    def __str__(self):
        return self.name


class SkillToTask(models.Model):
    skill = models.ForeignKey(Skill, on_delete=models.CASCADE)
    task = models.ForeignKey(Task, on_delete=models.CASCADE)



class UserToTask(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    task = models.ForeignKey(Task, on_delete=models.CASCADE)
    created_date = models.DateTimeField(auto_now=True)
    updated_date = models.DateTimeField(auto_now=True)
    approve = models.BooleanField(default=False)
    done = models.BooleanField(default=False)
    grade = models.IntegerField(blank=True, null=True)

