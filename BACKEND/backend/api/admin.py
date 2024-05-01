from django.contrib import admin
from .models import Donation

class DonationAdmin(admin.ModelAdmin):
    list_display = ['noun', 'address', 'city', 'donation', 'quantity']

admin.site.register(Donation, DonationAdmin)
