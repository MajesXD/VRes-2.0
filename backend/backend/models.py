from django.db import models

class Reservation(models.Model):
    type = models.IntegerField()
    date = models.DateField()
    client = models.CharField(max_length=50)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    note = models.TextField(null=True, blank=True)

class Payment(models.Model):
    quota = models.DecimalField(max_digits=10, decimal_places=2)
    pay_type = models.SmallIntegerField()
    reservation = models.ForeignKey(Reservation, on_delete=models.CASCADE)