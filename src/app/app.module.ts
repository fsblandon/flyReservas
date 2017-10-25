import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ReservasPage } from '../pages/reservas/reservas';
import { VuelosPage } from '../pages/vuelos/vuelos';
import {ReservarPage} from '../pages/reservar/reservar';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListaReservasProvider } from './providers/lista-reservas/lista-reservas';

@NgModule({
  declarations: [
    MyApp,
    ReservasPage,
    VuelosPage,
    ReservarPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ReservasPage,
    VuelosPage,
    ReservarPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListaReservasProvider
  ]
})
export class AppModule {}
