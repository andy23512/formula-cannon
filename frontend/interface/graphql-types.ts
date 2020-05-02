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



export type Query = {
   __typename?: 'Query';
  sops?: Maybe<Array<Maybe<SopType>>>;
};

export type SopItemType = {
   __typename?: 'SOPItemType';
  id: Scalars['ID'];
  name: Scalars['String'];
  order: Scalars['Int'];
};

export type SopType = {
   __typename?: 'SOPType';
  id: Scalars['ID'];
  name: Scalars['String'];
  items: Array<SopItemType>;
};


