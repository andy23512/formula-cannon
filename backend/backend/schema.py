from graphene import ObjectType, Schema
import sop.schema


class Query(sop.schema.Query, ObjectType):
    pass


class Mutation(ObjectType):
    pass


schema = Schema(query=Query)
