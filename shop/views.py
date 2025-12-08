from rest_framework import generics
from .models import Product
from .serializers import ProductSerializer

class ProductListView(generics.ListAPIView):
    queryset = Product.objects.all().select_related("category").prefetch_related("images")
    serializer_class = ProductSerializer

class ProductDetailView(generics.RetrieveAPIView):
    queryset = Product.objects.all().select_related("category").prefetch_related("images")
    serializer_class = ProductSerializer
    lookup_field = "slug"
