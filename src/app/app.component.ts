import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { AngularFirestore } from 'angularfire2/firestore';
import { HomePage } from '../pages/home/home';
import { InicioPage } from '../pages/inicio/inicio';
import { RegistroPage } from '../pages/registro/registro';
import { ChatPage } from '../pages/chat/chat';
import { PerfilPage } from '../pages/perfil/perfil';


var config = {
  apiKey: "AIzaSyDk2H5Yzy8mp8Q6OOwDQ8gptAFYYbP7x5Y",
  authDomain: "proyecto-final-cfc6c.firebaseapp.com",
  databaseURL: "https://proyecto-final-cfc6c.firebaseio.com",
  projectId: "proyecto-final-cfc6c",
  storageBucket: "proyecto-final-cfc6c.appspot.com",
  messagingSenderId: "878191344149"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = PerfilPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
