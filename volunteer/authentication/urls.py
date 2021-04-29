from django.urls import path

# from .views import RegistrationAPIView, LoginAPIView, UserRetrieveUpdateAPIView
from .views import GoogleLoginView

app_name = 'authentication'
urlpatterns = [
    path("google/", GoogleLoginView.as_view(), name="google")
    # path('user', UserRetrieveUpdateAPIView.as_view()),
    # path('users/', RegistrationAPIView.as_view()),
    # path('users/loginn', LoginAPIView.as_view()),
]