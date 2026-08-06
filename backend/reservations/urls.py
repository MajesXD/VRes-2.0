from django.urls import path
from .views import ReservationShowCreate, ReservationUpdateDelete

urlpatterns = [
    path("", ReservationShowCreate.as_view(), name="reservation-show"),
    path("<int:pk>/", ReservationUpdateDelete.as_view(), name="reservation-update"),
]