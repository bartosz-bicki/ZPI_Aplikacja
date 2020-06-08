from django.shortcuts import render, redirect
from .forms import RegisterForm

from django.urls import reverse_lazy
from django.views import generic
from django.utils import timezone
from django.http import HttpResponseRedirect
import requests
from .models import Article
from .scraper import scrapNews
from rest_framework import viewsets
from .serializers import ArticleSerializer

# Create your views here.

def about(request):
    url = 'https://api.nbp.pl/api/exchangerates/tables/a/?format=json'

    response = requests.get(url)
    data = response.json()
    serialize = data[0]['rates']
    foo = scrapNews()
    
    for i in range(len(foo)):
        if Article.objects.filter(url =foo['news{}'.format(i)]['href{}'.format(i)]).exists():
            pass
        else:
            Article.objects.create(title = foo['news{}'.format(i)]['title{}'.format(i)], slug = foo['news{}'.format(i)]['image{}'.format(i)], url = foo['news{}'.format(i)]['href{}'.format(i)])
    return render(request, 'about.html', {'serialize': serialize})
    
def charts(request):
    return render(request, 'charts.html', {'title': 'Charts'})

def currencyexchanger(request):
    newsData = scrapNews()
    
    return render(request, 'currencyexchanger.html', {'newsData' : newsData})


def team(request):
    return render(request, 'team.html', {'title': 'Team'})



def rejestracja(response):
    if response.method == "POST":
        form = RegisterForm(response.POST)
        if form.is_valid():
            form.save()
            return redirect("/")
    else:
        form = RegisterForm()

    return render(response, 'rejestracja.html', {'form':form})


def login(request):
    return render(request, 'login.html', {'title': 'Login'})

def contact(request):
    return render(request, 'contact.html', {'title': 'Contact'})
class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all().order_by('title')
    serializer_class = ArticleSerializer


