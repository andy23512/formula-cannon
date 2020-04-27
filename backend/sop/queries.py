from graphene import ObjectType, Field, List
from .models import SOP
from .object_types import SOPType


class SOPQuery(ObjectType):
    sops = List(SOPType)

    def resolve_sops(self, _):
        return SOP.objects.all()

