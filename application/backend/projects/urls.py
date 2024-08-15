from django.urls import path

from . import views

app_name = "projects"

urlpatterns = [
    path("",views.Project_List_API_View.as_view()),
]
