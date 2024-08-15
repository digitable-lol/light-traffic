from typing import Any
from django.db import models

# Create your models here.
class Employee(models.Model):
    
    Employer_id = models.IntegerField(default=0)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)

    def __str__(self):
        return self.first_name +" " + self.last_name

class Report(models.Model):
    report_id = models.IntegerField(default=0)
    report_name = models.CharField(max_length=100)
    report_start = models.DateTimeField()
    report_finish = models.DateTimeField()
    report_green_comment = models.TextField(max_length=500)
    report_yellow_comment = models.TextField(max_length=500)
    report_red_comment = models.TextField(max_length=500)
    employee_going_vacation = models.BooleanField(default=False)
    anyone_going_vacation = models.CharField(max_length=100,default="Nobody")
    other_comments = models.TextField(max_length=1000,default="Nothing")
    
    def __str__(self):
        return self.report_name 
    def get_project_id():
        return 0
    report_creater = models.ForeignKey(to="Employee")
    related_project = models.ForeignKey(to="Project",on_delete=models.CASCADE,default=0)

class Project(models.Model):
    project_id = models.IntegerField(default=0)
    project_name = models.CharField(max_length=100)
    project_discription = models.TextField(max_length=500)
    project_start_time = models.DateTimeField()
    project_end_time = models.DateTimeField()
    employee = models.ManyToManyField(Employee)
    def __str__(self):
        return self.project_name

class Objective(models.Model):
    COLOR_CHOICES = {
        "R": "Red",
        "G": "Green",
        "Y": "Yellow",
    }
    objective_id = models.IntegerField(default=0)
    objective_name = models.CharField(max_length=100)
    objective_color = models.CharField(max_length=1,choices=COLOR_CHOICES,default="G")
    def get_report_id():
        return 0
    related_report = models.ForeignKey(to = "Report", on_delete=models.CASCADE,default=0)

