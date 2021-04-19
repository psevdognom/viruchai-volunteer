from django.contrib import admin

from .models import *

# Register your models here.

@admin.register(Candidate)
class CandidateAdmin(admin.ModelAdmin):
    list_display = ('name', 'active')
    fields = ('name', 'bio', 'active', 'image')


@admin.register(Region)
class RegionAdmin(admin.ModelAdmin):
    list_display = ('name', 'active')
    fields = ('name', 'active')


@admin.register(District)
class DistrictAdmin(admin.ModelAdmin):
    list_display = ('name', 'region', 'active', 'info')
    fields = ('name', 'region', 'active', 'info')


@admin.register(ElectionType)
class ElectionTypeAdmin(admin.ModelAdmin):
    list_display = ('name', )
    fields = ('name', )


@admin.register(Election)
class ElectionAdmin(admin.ModelAdmin):
    list_display = ('name', 'type')
    fields = ('name', 'type', 'election_date')



@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'active')
