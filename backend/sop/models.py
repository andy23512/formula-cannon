from django.db import models

# Create your models here.


class SOP(models.Model):
    name = models.CharField(max_length=200)


class SOPItem(models.Model):
    sop = models.ForeignKey(SOP, on_delete=models.CASCADE, related_name='items')
    name = models.CharField(max_length=200)
    order = models.IntegerField()
