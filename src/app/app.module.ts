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
import { SuccessModalComponent } from './shared/components/modal/success-modal/success-modal.component';
import { FailureModalComponent } from './shared/components/modal/failure-modal/failure-modal.component';
import { LoginComponent } from './pages/login/login.component';
import { EmptyLayoutComponent } from './layout/empty-layout/empty-layout.component';
import { NavigatorLayoutComponent } from './layout/navigator-layout/navigator-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    InternalServerErrorComponent,
    NotFoundComponent,
    UnauthorizedComponent,
    TestgroundComponent,
    AlertComponent,
    ModalComponent,
    SuccessModalComponent,
    FailureModalComponent,
    LoginComponent,
    EmptyLayoutComponent,
    NavigatorLayoutComponent,
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
