from django.db import models

class Reservation(models.Model):
    client = models.CharField(max_length=255)
    amount = models.IntegerField()
    date = models.DateField()
    time = models.TimeField()
    duration = models.TimeField()
    note = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return f"{self.date} | {self.time} | {self.client}"


class Payment(models.Model):
    reservation = models.ForeignKey(
        Reservation,
        on_delete=models.CASCADE,
        related_name="payments"
    )

    quota = models.FloatField(default=0.2)
    paytype = models.IntegerField()

    def __str__(self):
        return f"Payment for {self.reservation.date} | {self.reservation.time} | {self.reservation.client}"