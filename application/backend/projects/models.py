from django.db import models

# Create your models here.
class Employee(models.Model):
    
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    is_deleted = models.BooleanField(default=False)
    employee_email = models.CharField(max_length=50)

    def __str__(self):
        return self.first_name +" " + self.last_name

class Report(models.Model):
    COLOR_CHOICES = {
        "R": "Red",
        "G": "Green",
        "Y": "Yellow",
    }
    report_name = models.CharField(max_length=100)
    report_start = models.DateTimeField()
    report_finish = models.DateTimeField()
    report_green_comment = models.TextField(max_length=500)
    report_yellow_comment = models.TextField(max_length=500)
    report_red_comment = models.TextField(max_length=500)
    employee_going_vacation = models.BooleanField(default=False)
    anyone_going_vacation = models.CharField(max_length=100,default="Nobody")
    other_comments = models.TextField(max_length=1000,default="Nothing")
    report_creater = models.ForeignKey(Employee, on_delete = models.DO_NOTHING,default=0)
    related_project = models.ForeignKey(to="Project",on_delete=models.DO_NOTHING,default=0)
    is_deleted = models.BooleanField(default=False)
    final_report_color = models.CharField(max_length=1,choices=COLOR_CHOICES,default='G')

    def __str__(self):
        return self.report_name

class Project(models.Model):
    project_name = models.CharField(max_length=100)
    project_description = models.TextField(max_length=500)
    project_start_time = models.DateTimeField()
    project_end_time = models.DateTimeField()
    employee = models.ManyToManyField(Employee)
    is_deleted = models.BooleanField(default=False)
    def __str__(self):
        return self.project_name

class Objective(models.Model):
    COLOR_CHOICES = {
        "R": "Red",
        "G": "Green",
        "Y": "Yellow",
    }
    objective_name = models.CharField(max_length=100)
    objective_color = models.CharField(max_length=1,choices=COLOR_CHOICES,default="G")
    related_report = models.ForeignKey(to = "Report", on_delete=models.DO_NOTHING,default=0)
    is_deleted = models.BooleanField(default=False)
    objective_descripion = models.CharField(max_length=100)
    def __str__(self):
        return self.objective_name
