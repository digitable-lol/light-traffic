from rest_framework import serializers
from .models import Employee, Objective, Project, Report
class Project_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class Employee_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'

class Report_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = '__all__'
    

class Objective_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Objective
        fields = '__all__'
    