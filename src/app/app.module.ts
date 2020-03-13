import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedOverviewComponent } from './modules/shared-overview/shared-overview.component';
import { InputCurrencyComponent } from './shared/components/input/input-currency/input-currency.component';
import { ButtonSimpleComponent } from './shared/components/button/button-simple/button-simple.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedOverviewComponent,
    InputCurrencyComponent,
    ButtonSimpleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
