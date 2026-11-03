from django.http import JsonResponse
from ..fruits_db import fruits

# Create your views here.
def send_fruits(request):
    return JsonResponse(fruits, safe=False)
