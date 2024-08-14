from django.contrib import admin

from .models import Employee, Project,Report,Stages
from .forms import ProjectForm

class ProjectForm(admin.ModelAdmin):
    form = ProjectForm
# Register your models here.
admin.site.register(Project)
admin.site.register(Report)

admin.site.register(Stages)
admin.site.register(Employee)