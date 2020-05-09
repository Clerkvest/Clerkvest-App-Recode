import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InternalServerErrorComponent } from './execption/pages/internal-server-error/internal-server-error.component';
import { NotFoundComponent } from './execption/pages/not-found/not-found.component';
import { UnauthorizedComponent } from './execption/pages/unauthorized/unauthorized.component';
import { HttpClientModule } from '@angular/common/http';
import { TestgroundComponent } from './pages/testground/testground.component';
import { AlertComponent } from './shared/components/alert/alert.component';
import { ModalComponent } from './shared/components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    InternalServerErrorComponent,
    NotFoundComponent,
    UnauthorizedComponent,
    TestgroundComponent,
    AlertComponent,
    ModalComponent,
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
