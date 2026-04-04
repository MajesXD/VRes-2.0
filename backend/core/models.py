from django.db import models


class Reservations(models.Model):
    id = models.AutoField(primary_key=True)
    type = models.IntegerField(blank=True, null=True)
    client = models.TextField(blank=True, null=True)
    amount = models.IntegerField(blank=True, null=True)
    date = models.DateField(blank=True, null=True)
    hour = models.TimeField(blank=True, null=True)
    time = models.FloatField(blank=True, null=True)
    note = models.TextField(blank=True, null=True)


    class Meta:
        managed = False
        db_table = "reservations"
        verbose_name_plural = "Reservations"

    def __str__(self):
        return f"Reservation {self.id} - {self.client}"


class Payments(models.Model):
    id = models.IntegerField(primary_key=True)
    reservation = models.ForeignKey(Reservations, models.DO_NOTHING, db_column="reservation_id", related_name="payments")
    quota = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    pay_type = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = "payments"
        verbose_name_plural = "Payments"

    def __str__(self):
        return f"Payment {self.id} -> Reservation {self.reservation_id}"