from django.contrib import admin

from .models import Employee, Project, Report, Objective

# Register your models here.
admin.site.register(Project)

admin.site.register(Report)

admin.site.register(Objective)

admin.site.register(Employee)
