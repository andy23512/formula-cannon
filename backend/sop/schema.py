from graphene import ObjectType
from .queries import SOPQuery


class Query(SOPQuery, ObjectType):
    pass


class Mutation(ObjectType):
    pass
