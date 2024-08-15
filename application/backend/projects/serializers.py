from rest_framework import serializers
from .models import Employee
class Project_Serializer(serializers.Serializer):
    project_id = serializers.IntegerField()
    project_name = serializers.CharField(max_length=200)
    project_discription = serializers.CharField(max_length=500)
    project_start_time = serializers.DateTimeField()
    project_end_time = serializers.DateTimeField()
    # employe = serializers.ManyRelatedField(Employee) Need to fix this part

class Employee_Serializer(serializers.Serializer):
    Employer_id = serializers.IntegerField()
    first_name = serializers.CharField(max_length=50)
    last_name = serializers.CharField(max_length=50)

class Report_Serializer(serializers.Serializer):
    report_id = serializers.ImageField()
    report_name = serializers.CharField(max_length = 100)
    report_start = serializers.DateTimeField()
    report_finish = serializers.DateTimeField()
    report_green_comment = serializers.CharField(max_length = 500)
    report_yellow_comment = serializers.CharField(max_length = 500)
    report_red_comment = serializers.CharField(max_length = 500)
    employee_going_vacation = serializers.BooleanField()
    anyone_going_vacation = serializers.CharField(max_length = 100)
    other_comments = serializers.CharField(max_length = 1000)
    related_project = serializers.IntegerField(source = 'Project.project_id')
    report_creater = serializers.CharField(source = 'Employee.Employer_id')

class Objective_Serializer(serializers.Serializer):
    objective_id = serializers.IntegerField()
    objective_name = serializers.CharField(max_length = 100)
    objective_color = serializers.CharField(max_length = 1)
    related_report = serializers.IntegerField(source = 'Report.report_id')