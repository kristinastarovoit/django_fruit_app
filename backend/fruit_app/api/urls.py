from django.urls import path
from fruit_app.api import views

urlpatterns = [
    path('', views.send_fruits)
]