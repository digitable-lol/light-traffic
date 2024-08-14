from django.shortcuts import render
from django.http import Http404, HttpResponse
from django.template import loader

from .models import Employee, Project

from .forms import ProjectForm

# Create your views here.
def index(request):
    projects_list = Project.objects.all()
    context = {"projects_list": projects_list, }
    return HttpResponse(render(request, "index.html",context))


def details(request, project_id):
    try:
        projects = Project.objects.get(pk=project_id)
    except Project.DoesNotExist:
        raise Http404("Project does not exist")
    return render(request, "detail.html", {"projects": projects})