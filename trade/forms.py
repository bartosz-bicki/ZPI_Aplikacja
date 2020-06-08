from django import forms
from crispy_forms.helper import FormHelper
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


class RegisterForm(UserCreationForm):
    email = forms.EmailField()

    class Meta:
        model = User
        fields = ["username", "first_name", "last_name", "email", "password1", "password2"]

class EditProfileForm(UserChangeForm):
	password = None
	class Meta:
		model = User
		fields = ["email", "first_name", "last_name"]
		exclude = ["password"]