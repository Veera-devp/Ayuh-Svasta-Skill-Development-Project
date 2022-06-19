from django.urls import path,include
from django.contrib import admin
from . import views
from django.contrib.auth import views as auth_view
from django.contrib.auth import views as auth_views
from . import views
urlpatterns = [
    path('', views.home, name='home'),
    path('about', views.about, name='about'),
    path('service', views.services, name='services'),
    path('news', views.news, name='news'),
    path('contact', views.contact, name='contact'),
    path('get-started/', views.index, name = 'index'),
    path('welcome-dashboard/', views.homeage, name = 'homeage'),
    path('register/', views.registerUser, name = 'register'),
    path('login/', views.loginUser, name = 'login'),
    path('logout/', views.logoutUser, name = 'logout'),
    path('post-data/',views.regdash,name='regdash'),
    path('message-posted/',views.message,name='message'),
    path('user-pofile/',views.profile,name='profile'),
    path('database-data/',views.indexer,name='indexer'),
    path('create$', views.create, name='create'),
    path('edit/(?P<id>\d+)$', views.edit, name='edit'),
    path('edit/update/(?P<id>\d+)$', views.update, name='update'),
    path('delete/(?P<id>\d+)$', views.delete, name='delete'),
    path('payment-dashboard/',views.payment,name='payment'),
    path('admin-dashboard/',views.admin_dashboard_view,name='admin_dashboard_view'),
]

