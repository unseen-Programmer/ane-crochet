from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from .models import Product


def product_list(request):
    products = Product.objects.all().values()
    return JsonResponse(list(products), safe=False)


def product_detail(request, slug):
    product = get_object_or_404(Product, slug=slug)
    return JsonResponse({
        "id": product.id,
        "name": product.name,
        "price": product.price,
        "slug": product.slug,
        "description": product.description,
    })
