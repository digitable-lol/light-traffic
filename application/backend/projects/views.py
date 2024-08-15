from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Max

from .models import Employee, Objective, Project, Report
from .serializers import Employee_Serializer, Objective_Serializer, Project_Serializer, Report_Serializer
# Create your views here.
class Employes_List_API_View(APIView):
    # list all
    def get(self,request,*args,**kwarts):
        employers = Employee.objects.all()
        serializer = Employee_Serializer(employers,many = True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class Project_List_API_View(APIView):
    # list all
    def get(self,request,*args,**kwarfs):
        projects = Project.objects.all()
        serializer = Project_Serializer(projects,many = True)
        return Response(serializer.data,status = status.HTTP_200_OK)

class Report_List_API_View(APIView):
    # list of all reports of this project

    def get(self,request,*args,**kwards):
        reports = Report.objects.filter(related_project = request.Project.project_id)
        serializer = Report_Serializer(reports, many = True)
        return Response(serializer.data, status= status.HTTP_200_OK)

    # Create the Report with given data  
    def post(self,request,*args,**kwargs):
        new_id = Report.objects.aaggregate(Max('report_id'))['report_id'] + 1
        data = {
            'report_id': new_id,
            'report_name': request.data.get('report_name'),
            'report_start': request.data.get('report_start'),
            'report_finish': request.data.get('report_finish'),
            'report_green_comment': request.data.get('report_green_comment'),
            'report_yellow_comment': request.data.get('report_yellow_comment'),
            'report_red_comment': request.data.get('report_red_comment'),
            'employee_going_vacation': request.data.get('employee_going_vacation'),
            'anyone_going_vacation': request.data.get('anyone_going_vacation'),
            'other_comments':request.data.get('other_comments'),
            'report_creater': request.data.get('report_creater'),
            'relaved_project': request.data.get('related_project')
        }

        serializer = Report_Serializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class Objective_List_API_View(APIView):
    # list of all objectives of this report
    def get(self,request,*args,**kards):
        objectives = Objective.objects.filter(related_report = request.Report.report_id)
        serializer = Objective_Serializer(objectives,many = True)
        return Response(serializer.data,status=status.HTTP_200_OK)
    
    # Create the Objective for this report
    def post(self,requset,*args,**kards):
        new_id = Objective.objects.aaggregate(Max('report_id'))['report_id'] + 1
        data = {
            'objective_id': new_id,
            'objective_name': requset.data.get('objective_name'),
            'objective_color': requset.data.get('objective_color'),
            'related_report': requset.data.get('related_report'),
        }
        serializer = Objective_Serializer(data = data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)