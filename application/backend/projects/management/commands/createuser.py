from django.core.management.base import BaseCommand
from django.contrib.auth.models import User

class Command(BaseCommand):
    def __init__(self, *args, **kwargs):
        help = "Creates default admin superuser"
        super(Command, self).__init__(*args, **kwargs)

    def handle(self, *args, **options):
        try:
                username = 'admin'
                email = ''
                password = 'admin'
                print('Creating account for %s (%s)' % (username, email))
                admin = User.objects.create_superuser(username=username, password=password)
                admin.is_active = True
                admin.is_admin = True
                admin.save()
        except:
            print('Admin accounts can only be initialized if no Accounts exist')