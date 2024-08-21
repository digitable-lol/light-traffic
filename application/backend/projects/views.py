from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status

from .models import Employee, Objective, Project, Report
from .serializers import Employee_Serializer, Objective_Serializer, Project_Serializer, Report_Serializer
# Create your views here.
class Employes_List_API_View(viewsets.ModelViewSet):
    # list all
    queryset = Employee.objects.all()
    serializer_class = Employee_Serializer

    def list(self, request, *args, **kwargs):
        data = list(Employee.objects.all().values())
        return Response(data,status=status.HTTP_200_OK)
    
    # read one by ID

    def read(self, request, *args, **kwargs):
        data = Employee.objects.filter(id = kwargs['pk'])[0]
        serializer = Employee_Serializer(data)
        if data:
            return Response(serializer.data,status = status.HTTP_200_OK)
        return Response(serializer.errors,status=status.HTTP_404_NOT_FOUND)
    
    #Create

    def create(self,request,*args,**kwargs):
        data = {
            'first_name': request.data.get('first_name'),
            'last_name': request.data.get('last_name')
        }
        serializer = Employee_Serializer(data = data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    # Delete

    def delete(self,request,*args,**kwargs):
        employe_data = Employee.objects.filter(id=kwargs['pk'])
        if employe_data:
            employe_data.delete()
            return Response({"messege": "Employer was deleted"}, status = status.HTTP_201_CREATED)
        else:
            return Response(status= status.HTTP_404_NOT_FOUND)

class Project_List_API_View(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = Project_Serializer

    # list all
    def list(self,request,*args,**kwarfs):
        projects = Project.objects.all()
        serializer = Project_Serializer(projects,many = True)
        return Response(serializer.data,status = status.HTTP_200_OK)
    
    # read one
    def read(self, request, *args, **kwargs):
        data = Project.objects.filter(id = kwargs['pk'])[0]
        serializer = Project_Serializer(data)
        if data:
            return Response(serializer.data,status = status.HTTP_200_OK)
        return Response(serializer.errors,status=status.HTTP_404_NOT_FOUND)
    
    # create project
    def create(self,request,*args,**kwargs):
        data = {
            'project_name': request.data.get('project_name'),
            'project_discription': request.data.get('project_discription'),
            'project_start_time': request.data.get('project_start_time'),
            'project_end_time': request.data.get('project_end_time'),
            'employee': request.data.get('employee')
        }
        serializer = Project_Serializer(data = data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        
    # delete project by id
    def delete(self,request,*args,**kwargs):
        project_data = Project.objects.filter(id=kwargs['pk'])
        if project_data:
            project_data.delete()
            return Response({"messege": "Project was deleted"}, status = status.HTTP_201_CREATED)
        else:
            return Response(status= status.HTTP_404_NOT_FOUND)


class Report_List_API_View(viewsets.ModelViewSet):
    queryset = Report.objects.all()
    serializer_class = Report_Serializer

    # list of all reports of this project
    def list(self,request,*args,**kwargs):
        reports = Report.objects.all()
        serializer = Report_Serializer(reports,many = True)
        return Response(serializer.data,status = status.HTTP_200_OK)
    
    # read report by ID
    def read(self, request, *args, **kwargs):
        data = Report.objects.filter(id = kwargs['pk'])[0]
        serializer = Report_Serializer(data)
        if data:
            return Response(serializer.data,status = status.HTTP_200_OK)
        return Response(serializer.errors,status=status.HTTP_404_NOT_FOUND)

    # Create the Report with given data  
    def create(self,request,*args,**kwargs):
        data = {
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

    # Delete report by ID
    def delete(self,request,*args,**kwargs):
        report_data = Report.objects.filter(id=kwargs['pk'])
        if report_data:
            report_data.delete()
            return Response({"messege": "Report was deleted"}, status = status.HTTP_201_CREATED)
        else:
            return Response(status= status.HTTP_404_NOT_FOUND)
        
class Objective_List_API_View(viewsets.ModelViewSet):
    
    queryset = Objective.objects.all()
    serializer_class = Objective_Serializer
    # list of all objectives of this report
    def list(self,request,*args,**kards):
        objectives = Objective.objects.all()
        serializer = Objective_Serializer(objectives,many = True)
        return Response(serializer.data,status=status.HTTP_200_OK)
    
    # Create the Objective for this report
    def create(self,requset,*args,**kwargs):
        data = {
            'objective_id': requset.data.get('objective_id'),
            'objective_name': requset.data.get('objective_name'),
            'objective_color': requset.data.get('objective_color'),
            'related_report': requset.data.get('related_report'),
        }
        serializer = Objective_Serializer(data = data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    #read objective by id
    def read(self, request, *args, **kwargs):
        data = Objective.objects.filter(id = kwargs['pk'])[0]
        serializer = Objective_Serializer(data)
        if data:
            return Response(serializer.data,status = status.HTTP_200_OK)
        return Response(serializer.errors,status=status.HTTP_404_NOT_FOUND)
    
    # Delete report by ID
    def delete(self,request,*args,**kwargs):
        objective_data = Report.objects.filter(id=kwargs['pk'])
        if objective_data:
            objective_data.delete()
            return Response({"messege": "Objective was deleted"}, status = status.HTTP_201_CREATED)
        else:
            return Response(status= status.HTTP_404_NOT_FOUND)
        