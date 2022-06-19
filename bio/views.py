from django.shortcuts import render,redirect
from django.contrib.auth import login, authenticate
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from .forms import RegisterForm
from  . models import producat,seller,buyer
from .models import Member
from django.contrib.auth.decorators import login_required,user_passes_test

def home(request):
    return render(request,'index.html')

def about(request):
    return render(request,'about.html')

def services(request):
    return render(request,'service.html')

def news(request):
    return render(request,'news.html')

def contact(request):
    return render(request,'contact.html')


def index(request):
    return render(request, 'bio/index.html', {})

def registerUser(request):
    form = RegisterForm()
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')

    else:
        form = RegisterForm()
    return render(request, 'bio/register.html', {'form':form})

def loginUser(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        if username and password:

            user = authenticate(username=username, password=password)

            if user is not None:
                login(request, user)
                return redirect('homeage')
            else:
                messages.error(request, 'Username or Password is Incorrect')
        else:
            messages.error(request, 'Fill out all the fields')

    return render(request, 'bio/login.html', {})

def homeage(request):
    return render(request, 'bio/home.html', {})

def payment(request):
     return render(request,'bio/payment.html',{})

def message(request):
     return render(request,'bio/message.html',{})

def profile(request):
    return render(request,'bio/profile.html',{})

def logoutUser(request):
    logout(request)
    return redirect('home')

def regdash(request):
    return render(request,'bio/regdash.html',{})

def indexer(request):
    members = Member.objects.all()
    context = {'members': members}
    return render(request, 'bio/crud.html', context)

def create(request):
    member = Member(firstname=request.POST['firstname'], lastname=request.POST['lastname'])
    member.save()
    return redirect('/')

def edit(request, id):
    members = Member.objects.get(id=id)
    context = {'members': members}
    return render(request, 'bio/edit.html', context)

def update(request, id):
    member = Member.objects.get(id=id)
    member.firstname = request.POST['firstname']
    member.lastname = request.POST['lastname']
    member.save()
    return redirect('/regdash')

def delete(request, id):
    member = Member.objects.get(id=id)
    member.delete()
    return redirect('/regdash')


def admin_dashboard_view(request):
    return render(request,'dashboard/dashboard.html',{})

