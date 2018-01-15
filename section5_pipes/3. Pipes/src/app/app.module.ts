import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

import { CapitalizedPipe } from './pipes/capitalized.pipe';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    CapitalizedPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'en'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
