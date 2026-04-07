from rest_framework import serializers
from .models import Reservations, Payments


class ReservationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservations
        fields = "__all__"


class PaymentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payments
        fields = "__all__"