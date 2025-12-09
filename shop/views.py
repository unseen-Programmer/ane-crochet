from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer

@api_view(["GET"])
def product_list(request):
    products = Product.objects.all()
    serializer = ProductSerializer(
        products,
        many=True,
        context={"request": request}
    )
    return Response(serializer.data)

@api_view(["GET"])
def product_detail(request, slug):
    product = Product.objects.get(slug=slug)
    serializer = ProductSerializer(
        product,
        context={"request": request}
    )
    return Response(serializer.data)
