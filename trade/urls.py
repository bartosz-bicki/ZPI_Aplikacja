from django.urls import path
from . import views

urlpatterns = [
    path('', views.about, name='about'),
    path('contact', views.contact, name='contact'),
    path('rejestracja', views.rejestracja, name='rejestracja'),
    path('charts', views.charts, name="charts"),
    path('currencyexchanger', views.currencyexchanger, name="currencyexchanger"),
    path('profile', views.profile, name='profile'),
    path(r'profile/edit/', views.edit_profile, name='edit_profile'),
]
