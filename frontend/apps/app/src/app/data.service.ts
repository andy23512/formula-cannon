import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { SopType } from '@frontend/interface';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private apollo: Apollo) {}

  public watchQueryAllData() {
    return this.apollo.watchQuery<{
      sops: SopType[];
    }>({
      query: gql`
        query Sops {
          sops {
            id
            name
            items {
              id
              name
              order
            }
          }
        }
      `
    });
  }
}
