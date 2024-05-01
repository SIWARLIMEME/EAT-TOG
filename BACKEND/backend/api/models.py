from django.db import models

class Donation(models.Model):
    noun = models.CharField(max_length=255, verbose_name="Nom de l'établissement")

    address = models.CharField(max_length=255, verbose_name="Adresse")

    city = models.CharField(max_length=100, verbose_name="Ville")

    donation = models.CharField(max_length=100,  verbose_name="Montant du don")

    quantity = models.CharField(max_length=100, verbose_name="Quantité")

   

    def __str__(self):
        return self.establishment_name
