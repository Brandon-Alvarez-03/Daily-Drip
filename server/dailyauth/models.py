from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager, PermissionsMixin

class UserManager(BaseUserManager):
  def create_user(self, username, email, password=None, **kwargs):
    if username is None:
      raise TypeError('Need a Username')
    if email is None:
      raise TypeError('Need a email')
    user = self.model(username=username, email=email)
    user.set_password(password)
    user.save(using=self._db)
    return user
  
  def create_superuser(self, username, password, email=None):
    if password is None:
      raise TypeError("Need Password")
    if username is None:
      raise TypeError("Need Username")
    user = self.create_user(username, password)
    user.is_superuser = True
    user.is_staff = True
    user.save(using=self._db)
    return user
    
class User(AbstractUser, PermissionsMixin):
  avatar = models.ImageField(upload_to='avatars', default='default.png')
  is_staff = models.BooleanField(default=False)
  updated_at = models.DateTimeField(auto_now=True)
  
  objects = UserManager()
  
  def __str__(self):
    return self.username
