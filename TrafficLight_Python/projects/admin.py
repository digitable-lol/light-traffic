from django.contrib import admin

from .models import Employee, Project,Report,Objective
from .forms import ProjectForm

class ProjectForm(admin.ModelAdmin):
    form = ProjectForm
# Register your models here.
admin.site.register(Project)

admin.site.register(Report)

admin.site.register(Objective)

admin.site.register(Employee)
