from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Donation
from .serializer import DonationSerializer

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/Donation/',

    ]
    return Response(routes)




@api_view(['GET', 'POST'])
def donationEndpoint(request):
    if request.method == 'POST':
        serializer = DonationSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)  
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'GET':
        donations = Donation.objects.all()
        serializer = DonationSerializer(donations, many=True)  
        return Response(serializer.data, status=status.HTTP_200_OK) 
