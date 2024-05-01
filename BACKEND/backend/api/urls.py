from django.urls import path
from . import views


urlpatterns = [
    path('donation/', views.donationEndpoint, name='donation-endpoint'),  
]
