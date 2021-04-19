from django.contrib import admin

from .models import *
# Register your models here.

@admin.register(SkillCategory)
class SkillCategoryAdmin(admin.ModelAdmin):
    pass

@admin