from rest_framework.routers import SimpleRouter
from dailyauth.views import UserViewSet, LoginViewSet, RegistrationViewSet, RefreshViewSet
from .views import DayViewSet

routes = SimpleRouter()

routes.register(r'auth/login', LoginViewSet, basename='auth-login')
routes.register(r'auth/register', RegistrationViewSet, basename='auth-register')
routes.register(r'auth/refresh', RefreshViewSet, basename='auth-refresh')

routes.register(r'user', UserViewSet, basename='user')

routes.register(r'days', DayViewSet, basename='days')

urlpatterns = [
    *routes.urls,
]