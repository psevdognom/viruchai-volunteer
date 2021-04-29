from django.contrib import admin

from .models import *


# Register your models here.

@admin.register(SkillCategory)
class SkillCategoryAdmin(admin.ModelAdmin):
    pass


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    pass


@admin.register(SkillToUser)
class SkillToUserAdmin(admin.ModelAdmin):
    pass


@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    pass

@admin.register(SkillToTask)
class SkillToTaskAdmin(admin.ModelAdmin):
    pass


@admin.register(UserToTask)
class UserToTaskAdmin(admin.ModelAdmin):
    pass
