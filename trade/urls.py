from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'article', views.ArticleViewSet)

urlpatterns = [
    path('', views.about, name='about'),
    path('team', views.team, name='team'),
    path('contact', views.contact, name='contact'),
    path('rejestracja', views.rejestracja, name='rejestracja'),
    path('charts', views.charts, name="charts"),
    path('currencyexchanger', views.currencyexchanger, name="currencyexchanger"),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
