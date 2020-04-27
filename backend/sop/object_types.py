from graphene_django import DjangoObjectType
from .models import SOP, SOPItem


class SOPType(DjangoObjectType):
    class Meta:
        model = SOP
        fields = ('id', 'name', 'items')

    def resolve_items(self, _):
        return self.items.order_by('order')


class SOPItemType(DjangoObjectType):
    class Meta:
        model = SOPItem
        fields = ('name', 'order')
