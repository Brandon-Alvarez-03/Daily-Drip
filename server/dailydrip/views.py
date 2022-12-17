from .serializers import DaySerializer
from .models import Day
from .permissions import IsOwnerOrReadOnly
from rest_framework import viewsets, permissions

class DayViewSet(viewsets.ModelViewSet):
    queryset = Day.objects.all()
    serializer_class = DaySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                      IsOwnerOrReadOnly]
    
    def perform_create(self, serializer):
      serializer.save(owner=self.request.user)
      
    def perform_update(self, serializer):
      serializer.save(owner=self.request.user)   
