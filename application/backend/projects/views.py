import datetime
from django.forms import ValidationError
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
import logging
from .models import Employee, Objective, Project, Report
from .serializers import Employee_Serializer, Objective_Serializer, Project_Serializer, Report_Serializer
# Create your views here.
class Employes_List_API_View(viewsets.ModelViewSet):
    # list all
    queryset = Employee.objects.all()
    serializer_class = Employee_Serializer

    def list(self, request, *args, **kwargs):
        logging.info(f"{request} - list all objects")
        data = list(Employee.objects.filter(is_deleted = False).values())
        return Response(data,status=status.HTTP_200_OK)
    
    # read one by ID

    def retrieve(self, request, *args, **kwargs):
        logging.info(f'{request},find - id = {kwargs["pk"]}')
        try:
            data = Employee.objects.filter(id = kwargs['pk'],is_deleted = False)[0]
            serializer = Employee_Serializer(data)
            logging.info('Object found')
            return Response(serializer.data,status = status.HTTP_200_OK)
        except Employee.DoesNotExist:
            logging.exception('Object not found')
            return Response(status=status.HTTP_404_NOT_FOUND)
        except IndexError:
            logging.exception("Index out of range")
            return Response(status=status.HTTP_404_NOT_FOUND)
        
    #Create

    def create(self,request,*args,**kwargs):
        logging.info(f"{request},{request.data}")
        data = {
            'first_name': request.data.get('first_name'),
            'last_name': request.data.get('last_name')
        }
        try:
            serializer = Employee_Serializer(data = data)
            serializer.is_valid()
            logging.info('data is valid')
            serializer.save()
            logging.info('data is saved')
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        except ValidationError:
            logging.exception('Data is not valid')
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    # Delete

    def destroy(self,request,*args,**kwargs):
        logging.info(f'{request},delete - id = {kwargs["pk"]}')
        try:
            data = Employee.objects.filter(id = kwargs['pk'])[0]
            logging.info('Object found')
            data.is_deleted = True
            data.save()
            logging.info('Object deleted')
            return Response(status = status.HTTP_201_CREATED)
        except Employee.DoesNotExist:
            logging.exception('Object not found')
            return Response(status=status.HTTP_404_NOT_FOUND)
        except IndexError:
            logging.exception("Index out of range")
            return Response(status=status.HTTP_404_NOT_FOUND)
        
    def update(self, request, *args, **kwargs):
        logging.info(request)
        try:
            details = Employee.objects.get(id=kwargs['pk'])
            logging.info('Object found')
            serializer = Employee_Serializer(
            details, data=request.data, partial=True)
            serializer.is_valid()
            logging.info('Data is valid')
            serializer.save()
            logging.info('Changes have been applied',serializer.data)
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        except ValidationError:
            logging.exception('Data is not valid')
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        except Employee.DoesNotExist:
            logging.exception('Object not found')
            return Response(status=status.HTTP_404_NOT_FOUND)
    


class Project_List_API_View(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = Project_Serializer

    # list all
    def list(self,request,*args,**kwarfs):
        logging.info(f"{request} - list all objects")
        response_data = []
        data = list(Project.objects.filter(is_deleted = False).values())
        current_time = datetime.datetime.now().timestamp()
        for i in data:
            if i["project_start_time"].timestamp() < current_time and i["project_end_time"].timestamp() > current_time:
                response_data.append(i)
        return Response(response_data,status = status.HTTP_200_OK)
    
    # read one
    def retrieve(self, request, *args, **kwargs):
        logging.info(f'{request},find - id = {kwargs["pk"]}')
        try:
            data = Project.objects.filter(id = kwargs['pk'],is_deleted = False)[0]
            serializer = Project_Serializer(data)
            logging.info('Object found')
            return Response(serializer.data,status = status.HTTP_200_OK)
        except Employee.DoesNotExist:
            logging.exception('Object not found')
            return Response(status=status.HTTP_404_NOT_FOUND)
        except IndexError:
            logging.exception("Index out of range")
            return Response(status=status.HTTP_404_NOT_FOUND)
    
    # create project
    def create(self,request,*args,**kwargs):
        logging.info(f"{request},{request.data}")
        data = {
            'project_name': request.data.get('project_name'),
            'project_description': request.data.get('project_description'),
            'project_start_time': request.data.get('project_start_time'),
            'project_end_time': request.data.get('project_end_time'),
            'employee': request.data.get('employee')
        }
        serializer = Project_Serializer(data = data)
        try:
            serializer = Employee_Serializer(data = data)
            serializer.is_valid()
            logging.info('data is valid')
            serializer.save()
            logging.info('data is saved')
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        except ValidationError:
            logging.exception('Data is not valid')
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        
    # delete project by id
    def destroy(self,request,*args,**kwargs):
        logging.info(f'{request},delete - id = {kwargs["pk"]}')
        try:
            data = Project.objects.filter(id = kwargs['pk'])[0]
            logging.info('Object found')
            data.is_deleted = True
            data.save()
            logging.info('Object deleted')
            return Response(status = status.HTTP_201_CREATED)
        except Employee.DoesNotExist:
            logging.exception('Object not found')
            return Response(status=status.HTTP_404_NOT_FOUND)
        except IndexError:
            logging.exception("Index out of range")
            return Response(status=status.HTTP_404_NOT_FOUND)
    
    def update(self, request, *args, **kwargs):
        logging.info(request)
        try:
            details = Project.objects.get(id=kwargs['pk'])
            logging.info('Object found')
            serializer = Project_Serializer(
            details, data=request.data, partial=True)
            serializer.is_valid()
            logging.info('Data is valid')
            serializer.save()
            logging.info('Changes have been applied',serializer.data)
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        except ValidationError:
            logging.exception('Data is not valid')
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        except Employee.DoesNotExist:
            logging.exception('Object not found')
            return Response(status=status.HTTP_404_NOT_FOUND)


class Report_List_API_View(viewsets.ModelViewSet):
    queryset = Report.objects.all()
    serializer_class = Report_Serializer

    # list of all reports of this project
    def list(self,request,*args,**kwargs):
        logging.info(f"{request} - list all objects")
        data = list(Report.objects.filter(is_deleted = False).values())
        return Response(data,status = status.HTTP_200_OK)
    
    # read report by ID
    def retrieve(self, request, *args, **kwargs):
        logging.info(f'{request},find - id = {kwargs["pk"]}')
        try:
            data = Report.objects.filter(id = kwargs['pk'],is_deleted = False)[0]
            serializer = Report_Serializer(data)
            logging.info('Object found')
            return Response(serializer.data,status = status.HTTP_200_OK)
        except Employee.DoesNotExist:
            logging.exception('Object not found')
            return Response(status=status.HTTP_404_NOT_FOUND)
        except IndexError:
            logging.exception("Index out of range")
            return Response(status=status.HTTP_404_NOT_FOUND)

    # Create the Report with given data  
    def create(self,request,*args,**kwargs):
        logging.info(f"{request},{request.data}")
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

        try:
            serializer = Employee_Serializer(data = data)
            serializer.is_valid()
            logging.info('data is valid')
            serializer.save()
            logging.info('data is saved')
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        except ValidationError:
            logging.exception('Data is not valid')
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    # Delete report by ID
    def destroy(self,request,*args,**kwargs):
        logging.info(f'{request},delete - id = {kwargs["pk"]}')
        try:
            data = Report.objects.filter(id = kwargs['pk'])[0]
            logging.info('Object found')
            data.is_deleted = True
            data.save()
            logging.info('Object deleted')
            return Response(status = status.HTTP_201_CREATED)
        except Employee.DoesNotExist:
            logging.exception('Object not found')
            return Response(status=status.HTTP_404_NOT_FOUND)
        except IndexError:
            logging.exception("Index out of range")
            return Response(status=status.HTTP_404_NOT_FOUND)
    
    def update(self, request, *args, **kwargs):
        logging.info(request)
        try:
            details = Report.objects.get(id=kwargs['pk'])
            logging.info('Object found')
            serializer = Report_Serializer(
            details, data=request.data, partial=True)
            serializer.is_valid()
            logging.info('Data is valid')
            serializer.save()
            logging.info('Changes have been applied',serializer.data)
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        except ValidationError:
            logging.exception('Data is not valid')
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        except Employee.DoesNotExist:
            logging.exception('Object not found')
            return Response(status=status.HTTP_404_NOT_FOUND)
        
class Objective_List_API_View(viewsets.ModelViewSet):
    
    queryset = Objective.objects.all()
    serializer_class = Objective_Serializer
    # list of all objectives of this report
    def list(self,request,*args,**kards):
        logging.info(f"{request} - list all objects")
        data = list(Objective.objects.filter(is_deleted = False).values())
        return Response(data,status=status.HTTP_200_OK)
    
    # Create the Objective for this report
    def create(self,request,*args,**kwargs):
        logging.info(f"{request},{request.data}")
        data = {
            'objective_id': request.data.get('objective_id'),
            'objective_name': request.data.get('objective_name'),
            'objective_color': request.data.get('objective_color'),
            'related_report': request.data.get('related_report'),
        }
        serializer = Objective_Serializer(data = data)
        try:
            serializer = Employee_Serializer(data = data)
            serializer.is_valid()
            logging.info('data is valid')
            serializer.save()
            logging.info('data is saved')
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        except ValidationError:
            logging.exception('Data is not valid')
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    #read objective by id
    def retrieve(self, request, *args, **kwargs):
        logging.info(f'{request},find - id = {kwargs["pk"]}')
        try:
            data = Objective.objects.filter(id = kwargs['pk'],is_deleted = False)[0]
            serializer = Objective_Serializer(data)
            logging.info('Object found')
            return Response(serializer.data,status = status.HTTP_200_OK)
        except Employee.DoesNotExist:
            logging.exception('Object not found')
            return Response(status=status.HTTP_404_NOT_FOUND)
        except IndexError:
            logging.exception("Index out of range")
            return Response(status=status.HTTP_404_NOT_FOUND)
    # Delete report by ID
    def destroy(self,request,*args,**kwargs):
        logging.info(f'{request},delete - id = {kwargs["pk"]}')
        try:
            data = Objective.objects.filter(id = kwargs['pk'])[0]
            logging.info('Object found')
            data.is_deleted = True
            data.save()
            logging.info('Object deleted')
            return Response(status = status.HTTP_201_CREATED)
        except Employee.DoesNotExist:
            logging.exception('Object not found')
            return Response(status=status.HTTP_404_NOT_FOUND)
        except IndexError:
            logging.exception("Index out of range")
            return Response(status=status.HTTP_404_NOT_FOUND)
        