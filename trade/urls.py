from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'article', views.ArticleViewSet)

urlpatterns = [
    path('', views.about, name='about'),
    path('contact', views.contact, name='contact'),
    path('rejestracja', views.rejestracja, name='rejestracja'),
    path('charts', views.charts, name="charts"),
    path('currencyexchanger', views.currencyexchanger, name="currencyexchanger"),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('profile', views.profile, name='profile'),
    path('profile/edit/', views.edit_profile, name='edit_profile'),
    path('profile/edit/change_password/', views.change_password, name='change_password')
]

