from rest_framework import viewsets
from .models import Reservations, Payments
from .serializers import ReservationsSerializer, PaymentsSerializer


class ReservationsViewSet(viewsets.ModelViewSet):
    queryset = Reservations.objects.all()
    serializer_class = ReservationsSerializer


class PaymentsViewSet(viewsets.ModelViewSet):
    queryset = Payments.objects.all()
    serializer_class = PaymentsSerializer