from django.db import models
from django.conf import settings

class Day(models.Model):
  owner = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='days', on_delete=models.CASCADE, null=True)
  description = models.CharField(max_length=512)
  category = models.CharField(max_length=64, default="other")
  usage = models.IntegerField(default='0')
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  
  def __str__(self):
    return self.description
