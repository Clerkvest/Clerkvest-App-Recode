import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InternalServerErrorComponent } from './execption/pages/internal-server-error/internal-server-error.component';
import { NotFoundComponent } from './execption/pages/not-found/not-found.component';
import { UnauthorizedComponent } from './execption/pages/unauthorized/unauthorized.component';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './shared/components/alert/alert.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { SuccessModalComponent } from './shared/components/modal/success-modal/success-modal.component';
import { FailureModalComponent } from './shared/components/modal/failure-modal/failure-modal.component';
import { EmptyLayoutComponent } from './layout/empty-layout/empty-layout.component';
import { NavigatorLayoutComponent } from './layout/navigator-layout/navigator-layout.component';
import { DesktopNavigatorComponent } from './shared/components/navigator/desktop-navigator/desktop-navigator.component';
import { MobileNavigatorComponent } from './shared/components/navigator/mobile-navigator/mobile-navigator.component';
import { NavigatorComponent } from './shared/components/navigator/navigator.component';
import { NavigatorProfileComponent } from './shared/components/navigator/components/navigator-profile/navigator-profile.component';
import { NavigatorLanguageComponent } from './shared/components/navigator/components/navigator-language/navigator-language.component';
import { ElementsComponent } from './pages/elements/elements.component';

@NgModule({
  declarations: [
    AppComponent,
    InternalServerErrorComponent,
    NotFoundComponent,
    UnauthorizedComponent,
    AlertComponent,
    ModalComponent,
    SuccessModalComponent,
    FailureModalComponent,
    EmptyLayoutComponent,
    NavigatorLayoutComponent,
    DesktopNavigatorComponent,
    MobileNavigatorComponent,
    NavigatorComponent,
    NavigatorProfileComponent,
    NavigatorLanguageComponent,
    ElementsComponent,
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
