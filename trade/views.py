from django.shortcuts import render, redirect
from .forms import RegisterForm
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from trade.models import Sympthoms
from django.views import generic
from django.utils import timezone
from django.http import HttpResponseRedirect
import requests
from scraper import scrapNews, toJson
from django.contrib.auth.forms import PasswordChangeForm
from django.contrib.auth import update_session_auth_hash

# Create your views here.

def about(request):
    url = 'https://api.nbp.pl/api/exchangerates/tables/a/?format=json'

    response = requests.get(url)
    data = response.json()
    serialize = data[0]['rates']
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

def profile(request):
    register = User.objects
    return render(request, 'profile.html', {'title': 'Profile', 'register': register})

def edit_profile(request):
    if request.method == "POST":
        form = EditProfileForm(request.POST, instance=request.user)

        if form.is_valid():
            form.save()
            return redirect('/profile')
    else:
        form = EditProfileForm(instance=request.user)
        return render(request, 'edit_profile.html', {'form': form})

def change_password(request):
    if request.method == "POST":
        form = PasswordChangeForm(data=request.POST, user=request.user)

        if form.is_valid():
            form.save()
            # update_session_auth_hash(request, form.user)
            return redirect('/profile')
        else:
            return redirect('/change_password')

    else: 
        form = PasswordChangeForm(user=request.user)
        return render(request, 'change_password.html', {'form': form})