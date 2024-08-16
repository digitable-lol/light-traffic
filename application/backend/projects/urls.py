from rest_framework.routers import DefaultRouter
from . import views

app_name = "projects"

router = DefaultRouter()
router.register('employes', views.Employes_List_API_View, basename='employes')
router.register('project', views.Project_List_API_View, basename='project')
router.register('report', views.Report_List_API_View, basename='report')
router.register('objective', views.Objective_List_API_View, basename='objective')
urlpatterns = router.urls
