import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LinearComponent } from './components/linear/linear.component';

import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { BarsComponent } from './components/bars/bars.component';
import { DoughnutComponent } from './components/doughnut/doughnut.component';
import { RadarComponent } from './components/radar/radar.component';

@NgModule({
  declarations: [
    AppComponent,
    LinearComponent,
    BarsComponent,
    DoughnutComponent,
    RadarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ChartsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
