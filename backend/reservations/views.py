from rest_framework import generics
from .models import Reservation
from .serializers import ReservationSerializer


class ReservationShowCreate(generics.ListCreateAPIView):
    serializer_class = ReservationSerializer

    def get_queryset(self):
        queryset = Reservation.objects.all()

        date = self.request.query_params.get("date")

        if date:
            queryset = queryset.filter(date=date)

        return queryset.order_by("time")


class ReservationUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer