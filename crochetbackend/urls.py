from django.contrib import admin
from django.urls import path
from django.http import HttpResponse

def home(request):
    return HttpResponse("Backend is running successfully ✅")

urlpatterns = [
    path('', home),   # ✅ ROOT URL FIXED
    path('admin/', admin.site.urls),
]
