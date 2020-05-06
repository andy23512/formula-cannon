from django.forms import ModelForm
from .models import SOP, SOPItem


class SOPForm(ModelForm):
    class Meta:
        model = SOP
        fields = ('name', )


class SOPItemForm(ModelForm):
    class Meta:
        model = SOPItem
        fields = ('sop', 'name', 'order')
