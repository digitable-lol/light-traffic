from django.contrib import admin

from .models import Employee, Project, Report, Objective

# Register your models here.
@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ("id","project_name", "project_start_time","project_end_time")
    search_fields = ('project_name','project_description','project_end_time','project_start_time','id')
    list_filter = ('project_start_time','project_end_time','employee')
@admin.register(Report)
class ReportAdmin(admin.ModelAdmin):
    list_display = ("id","report_name", "report_start","report_finish","employee_going_vacation","report_creater","related_project","final_report_color")
    list_filter = ('report_creater',"related_project",'report_start','report_finish',"final_report_color","employee_going_vacation")
    search_fields = ('report_name','report_start','report_finish')
@admin.register(Objective)
class ObjectiveAdmin(admin.ModelAdmin):
    list_display = ("id","objective_name","objective_descripion", "related_report","objective_color")
    list_filter = ('related_report','objective_color')
    search_fields = ('objective_name','objective_descripion','id')
@admin.register(Employee)
class EmployeeAdmin(admin.ModelAdmin):
    fields = ("first_name", "last_name", "employee_email")
    list_display = ("id","last_name", "first_name","employee_email")
    search_fields = ('id','first_name','last_name','employee_email')