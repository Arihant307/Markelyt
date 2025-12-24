from django.shortcuts import render,HttpResponse,redirect
from datetime import datetime
from home.models import Contact
from django.urls import reverse


# Create your views here.
def index(request):
    # context = {
    #     "name" : "Arihant",
    #     "Age" : 20
    # }
    return render(request,'home.html')

def about(request):
    return render(request, 'about.html')
    # return HttpResponse("This is AboutPage and It is created By Arihant")

def services(request):
    return render(request,'Services.html')
    return HttpResponse("Arihant is a Great Developer \n There are Four Services : ")

def contact(request):
    if request.method == "POST":
        name=request.POST.get('name')
        email=request.POST.get('email')
        phone=request.POST.get('phone')
        desc=request.POST.get('desc')
        contact=Contact(name=name, email=email, phone=phone, desc=desc, date=datetime.today())
        contact.save()

        # return render(request, 'Contact.html', {
        #     'success': True
        # })
        # return redirect('contact')
        return redirect(f"{reverse('Contact')}?success=1")


    return render(request,'contact.html')

# def home(request):
#     return render(request,'Home.html')

def web(request):
    return render(request, 'web.html')
def marketing(request):
    return render(request, 'marketing.html')


def digital(request):
    return render(request,'digital.html')