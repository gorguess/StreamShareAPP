import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import { PerfilPage } from '../perfil/perfil';
import { InicioPage } from '../inicio/inicio';
import { PeliculasPage } from '../peliculas/peliculas';

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  portada;
  titulo;
  usuario;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private streamingMedia: StreamingMedia
  ) {
    this.portada = navParams.data['foto'];
    this.titulo = navParams.data['nombre'];
    this.usuario = 'Gorguess';
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

  goToPerfil() {
    this.navCtrl.push(PerfilPage);
  }

  goToInicio() {
    this.navCtrl.push(InicioPage);
  }

  goToPeliculas() {
    this.navCtrl.push(PeliculasPage);
  }
  
  gotoreproductor(){
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log('Error streaming') },
      orientation: 'portrait'
    };
    this.streamingMedia.playVideo('https://www.youtube.com/watch?v=U6VMFwS2mPk', options);
  }
  
}
