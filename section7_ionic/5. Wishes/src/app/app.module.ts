import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PendingsPage } from '../pages/pendings/pendings.component';
import { FinishedPage } from '../pages/finished/finished.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WishesProvider } from '../providers/wishes.provider';
import { AddPage } from '../pages/add/add.component';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    PendingsPage,
    FinishedPage,
    AddPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    PendingsPage,
    FinishedPage,
    AddPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WishesProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
