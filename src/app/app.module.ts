import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {InternalServerErrorComponent} from './execption/pages/internal-server-error/internal-server-error.component';
import {NotFoundComponent} from './execption/pages/not-found/not-found.component';
import {UnauthorizedComponent} from './execption/pages/unauthorized/unauthorized.component';
import {HttpClientModule} from '@angular/common/http';
import {AlertComponent} from './shared/components/alert/alert.component';
import {ModalComponent} from './shared/components/modal/modal.component';
import {SuccessModalComponent} from './shared/components/modal/success-modal/success-modal.component';
import {FailureModalComponent} from './shared/components/modal/failure-modal/failure-modal.component';
import {EmptyLayoutComponent} from './layout/empty-layout/empty-layout.component';
import {NavigatorLayoutComponent} from './layout/navigator-layout/navigator-layout.component';
import {ElementsComponent} from './pages/elements/elements.component';
import {LoginComponent} from './pages/login/login.component';
import {DebounceDirective} from './shared/directives/Debounce/debounce.directive';
import {ThrottleDirective} from './shared/directives/Throttle/throttle.directive';
import {AuditDirective} from './shared/directives/Audit/audit.directive';
import {LoginEmailInputComponent} from './shared/components/login/login-email-input/login-email-input.component';
import {LoginEmailSendComponent} from './shared/components/login/login-email-send/login-email-send.component';
import {LoginAuthManuallyComponent} from './shared/components/login/login-auth-manually/login-auth-manually.component';
import {LoginLanguageSelectorComponent} from './shared/components/login/login-language-selector/login-language-selector.component';
import {LocalizationService} from './core/utils/localization/localization.service';
import {CookieService} from './core/utils/cookie/cookie.service';
import {NavigatorComponent} from './shared/components/navigator/navigator.component';
import {NavigatorDesktopComponent} from './shared/components/navigator/navigator-desktop/navigator-desktop.component';
import {NavigatorMobileComponent} from './shared/components/navigator/navigator-mobile/navigator-mobile.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {DashboardProjectComponent} from './pages/dashboard/dashboard-project/dashboard-project.component';
import {HorizontalScrollerComponent} from './shared/components/horizontal-scroller/horizontal-scroller.component';
import {CardComponent} from './shared/components/card/card.component';
import {NumberFormatPipe} from './shared/pipes/NumberFormat/number-format.pipe';
import {ShrinkPipe} from './shared/pipes/Shrink/shrink.pipe';
import {MonetaryUnitsComponent} from './shared/components/monetary-units/monetary-units.component';
import {MeComponent} from './pages/me/me.component';
import {SettingsComponent} from './shared/components/me/settings/settings.component';
import {ProjectListComponent} from './shared/components/me/project-list/project-list.component';
import {InvestmentListComponent} from './shared/components/me/investment-list/investment-list.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DashboardMaterialComponent} from './pages/dashboard-material/dashboard-material.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {LayoutModule} from '@angular/cdk/layout';
import {NavigatiorMaterialComponent} from './shared/components/navigatior-material/navigatior-material.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {DashbordMaterialProjectComponent} from './pages/dashboard-material/dashbord-material-project/dashbord-material-project.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';

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
    ElementsComponent,
    LoginComponent,
    DebounceDirective,
    ThrottleDirective,
    AuditDirective,
    LoginEmailInputComponent,
    LoginEmailSendComponent,
    LoginAuthManuallyComponent,
    LoginLanguageSelectorComponent,
    NavigatorComponent,
    NavigatorDesktopComponent,
    NavigatorMobileComponent,
    DashboardComponent,
    DashboardProjectComponent,
    HorizontalScrollerComponent,
    CardComponent,
    NumberFormatPipe,
    ShrinkPipe,
    MonetaryUnitsComponent,
    MeComponent,
    SettingsComponent,
    ProjectListComponent,
    InvestmentListComponent,
    DashboardMaterialComponent,
    NavigatiorMaterialComponent,
    DashbordMaterialProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatProgressBarModule
  ],
  providers: [
    LocalizationService,
    CookieService,
  ],
  exports: [
    ShrinkPipe
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
