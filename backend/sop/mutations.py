from graphene import Field, Mutation, ID, String
from graphene_django.forms.mutation import DjangoModelFormMutation
from .object_types import SOPType, SOPItemType
from .models import SOP, SOPItem
from .forms import SOPForm, SOPItemForm


class SOPMutation(DjangoModelFormMutation):
    sop = Field(SOPType)

    class Meta:
        form_class = SOPForm


class DeleteSOPMutation(Mutation):
    payload = String()

    class Arguments:
        id = ID(required=True)

    def mutate(cls, info, id):
        sop = SOP.objects.get(id=id)
        sop.delete()
        return cls(payload='success')


class SOPItemMutation(DjangoModelFormMutation):
    sop_item = Field(SOPItemType)

    class Meta:
        form_class = SOPItemForm


class DeleteSOPItemMutation(Mutation):
    payload = String()

    class Arguments:
        id = ID(required=True)

    def mutate(cls, info, id):
        sop_item = SOPItem.objects.get(id=id)
        sop_item.delete()
        return cls(payload='success')
