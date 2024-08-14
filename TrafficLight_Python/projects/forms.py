from django import forms
from .models import Project,Employee

class ProjectForm(forms.ModelForm):
    class Meta:
        model = Project
        fields = "__all__"
