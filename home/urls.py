from django.contrib import admin
from django.urls import path
from home import views

urlpatterns = [
    path("", views.index,name='home'),
    path("about us", views.about,name='about'),
    path("services", views.services,name='services'),
    path("contact", views.contact, name='Contact'),
    # path("home",views.home, name='home'),
    path("web",views.web, name='web'),
    path("marketing",views.marketing, name='marketing'),
    path("digital",views.digital, name='digital')

    
]
