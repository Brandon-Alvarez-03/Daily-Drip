from django.contrib import admin
from .models import Day
from dailyauth.models import User

admin.site.register(Day)
admin.site.register(User)
