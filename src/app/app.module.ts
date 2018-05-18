import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

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
import { ChatPage } from '../pages/chat/chat';

const firebaseAuth = {
  apiKey: "AIzaSyDk2H5Yzy8mp8Q6OOwDQ8gptAFYYbP7x5Y",
  authDomain: "proyecto-final-cfc6c.firebaseapp.com",
  databaseURL: "https://proyecto-final-cfc6c.firebaseio.com",
  projectId: "proyecto-final-cfc6c",
  storageBucket: "proyecto-final-cfc6c.appspot.com",
  messagingSenderId: "878191344149"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistroPage,
    InicioPage,
    MenuPage,
    PeliculasPage,
    PerfilPage,
    ChatPage  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistroPage,
    InicioPage,
    MenuPage,
    PeliculasPage,
    PerfilPage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera
  ]
})
export class AppModule {}
