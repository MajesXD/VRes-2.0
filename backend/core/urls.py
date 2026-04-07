from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ReservationsViewSet, PaymentsViewSet

router = DefaultRouter()
router.register(r"reservations", ReservationsViewSet)
router.register(r"payments", PaymentsViewSet)

urlpatterns = [
    path("", include(router.urls)),
]