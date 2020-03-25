import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InternalServerErrorComponent } from './execption/pages/internal-server-error/internal-server-error.component';
import { NotFoundComponent } from './execption/pages/not-found/not-found.component';
import { UnauthorizedComponent } from './execption/pages/unauthorized/unauthorized.component';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { NotificationComponent } from './shared/components/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    InternalServerErrorComponent,
    NotFoundComponent,
    UnauthorizedComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
