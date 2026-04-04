from django.contrib import admin
from .models import Reservations, Payments


@admin.register(Reservations)
class ReservationsAdmin(admin.ModelAdmin):
    list_display = ("id","type", "client", "date", "hour", "amount", "time")
    search_fields = ("client",)
    list_filter = ("date", "time")


@admin.register(Payments)
class PaymentsAdmin(admin.ModelAdmin):
    list_display = ("id", "reservation", "quota", "pay_type")
    list_filter = ("pay_type",)
    