import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { StreamingMedia } from '@ionic-native/streaming-media';
import { Ionic2RatingModule } from 'ionic2-rating';
// import { CalendarModule } from 'ionic3-calendar';

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
import { AddEventPage } from '../pages/add-event/add-event';
import { EditEventPage } from '../pages/edit-event/edit-event';
import { InfoPage } from '../pages/info/info';

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
    ChatPage,
    AddEventPage,
    EditEventPage,
    InfoPage
  ],
  imports: [ 
    FormsModule, 
    MbscModule,
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    Ionic2RatingModule
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
    ChatPage,
    AddEventPage,
    EditEventPage,
    InfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    StreamingMedia    
  ]
})
export class AppModule {}
