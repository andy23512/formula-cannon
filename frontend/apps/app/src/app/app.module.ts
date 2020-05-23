import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraphQLModule } from './graphql.module';
import {
  HttpClientModule,
  HttpClient,
  HttpClientXsrfModule
} from '@angular/common/http';
import { MainComponent } from './main/main.component';
import {
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatCheckboxModule,
  MatButtonModule
} from '@angular/material';
import { SopCheckState } from './state/sop-check.state';

export function getCsrf(http: HttpClient) {
  return () => http.get('/api/csrf').toPromise();
}

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GraphQLModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'formula-cannon-csrf',
      headerName: 'X-CSRFToken'
    }),
    NgxsModule.forRoot([SopCheckState]),
    NgxsStoragePluginModule.forRoot(),
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: getCsrf,
      multi: true,
      deps: [HttpClient]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
