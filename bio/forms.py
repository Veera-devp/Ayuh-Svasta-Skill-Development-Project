from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django import forms
class RegisterForm(UserCreationForm):
    email=forms.EmailField()
    first_name=forms.CharField(max_length=100)
    last_name=forms.CharField(max_length=100)
    full_name=forms.CharField(max_length=200)
    occupation=forms.CharField(max_length=40)
    class Meta:
        model = User
        fields = ['username','full_name', 'first_name','last_name','email','occupation', 'password1', 'password2']