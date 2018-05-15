import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { Camera } from '@ionic-native/camera';

import { HomePage } from '../pages/home/home';
import { RegistroPage } from '../pages/registro/registro';
import { InicioPage } from '../pages/inicio/inicio';
import { MenuPage } from '../pages/menu/menu';
import { PeliculasPage } from '../pages/peliculas/peliculas';
import { PerfilPage } from '../pages/perfil/perfil';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistroPage,
    InicioPage,
    MenuPage,
    PeliculasPage,
    PerfilPage  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistroPage,
    InicioPage,
    MenuPage,
    PeliculasPage,
    PerfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera
  ]
})
export class AppModule {}
