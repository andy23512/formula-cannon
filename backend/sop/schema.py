from graphene import ObjectType
from .queries import SOPQuery
from .mutations import SOPMutation, SOPItemMutation, DeleteSOPMutation, DeleteSOPItemMutation


class Query(SOPQuery, ObjectType):
    pass


class Mutation(ObjectType):
    sop_mutation = SOPMutation.Field()
    sop_item_mutation = SOPItemMutation.Field()
    delete_sop_mutation = DeleteSOPMutation.Field()
    delete_sop_item_mutation = DeleteSOPItemMutation.Field()
