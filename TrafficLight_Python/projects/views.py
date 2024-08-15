from django.shortcuts import render
from django.http import HttpResponse

from .models import Project


# Create your views here.
def index(request):
    projects_list = Project.objects.all()
    context = {"projects_list": projects_list, }
    return HttpResponse(render(request, "index.html",context))

