// @ts-ignore: Unused variable
import gql from 'graphql-tag';
export type Maybe<T> = T | null;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};



export type DeleteSopItemMutation = {
   __typename?: 'DeleteSOPItemMutation';
  payload?: Maybe<Scalars['String']>;
};

export type DeleteSopMutation = {
   __typename?: 'DeleteSOPMutation';
  payload?: Maybe<Scalars['String']>;
};

export type ErrorType = {
   __typename?: 'ErrorType';
  field: Scalars['String'];
  messages: Array<Scalars['String']>;
};

export type Mutation = {
   __typename?: 'Mutation';
  sopMutation?: Maybe<SopMutationPayload>;
  sopItemMutation?: Maybe<SopItemMutationPayload>;
  deleteSopMutation?: Maybe<DeleteSopMutation>;
  deleteSopItemMutation?: Maybe<DeleteSopItemMutation>;
};


export type MutationSopMutationArgs = {
  input: SopMutationInput;
};


export type MutationSopItemMutationArgs = {
  input: SopItemMutationInput;
};


export type MutationDeleteSopMutationArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSopItemMutationArgs = {
  id: Scalars['ID'];
};

export type Query = {
   __typename?: 'Query';
  sops?: Maybe<Array<Maybe<SopType>>>;
};

export type SopItemMutationInput = {
  sop: Scalars['ID'];
  name: Scalars['String'];
  order: Scalars['Int'];
  id?: Maybe<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type SopItemMutationPayload = {
   __typename?: 'SOPItemMutationPayload';
  sOPItem?: Maybe<SopItemType>;
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  sopItem?: Maybe<SopItemType>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type SopItemType = {
   __typename?: 'SOPItemType';
  id: Scalars['ID'];
  name: Scalars['String'];
  order: Scalars['Int'];
};

export type SopMutationInput = {
  name: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type SopMutationPayload = {
   __typename?: 'SOPMutationPayload';
  sOP?: Maybe<SopType>;
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  sop?: Maybe<SopType>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type SopType = {
   __typename?: 'SOPType';
  id: Scalars['ID'];
  name: Scalars['String'];
  items: Array<SopItemType>;
};


