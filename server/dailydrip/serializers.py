from .models import Day
from rest_framework import serializers

class DaySerializer(serializers.ModelSerializer):
  class Meta:
    model = Day
    fields = '__all__'
    owner = serializers.ReadOnlyField(source='owner.username')
    


    