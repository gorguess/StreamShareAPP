import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Subject } from 'rxjs';
import { PerfilPage } from '../perfil/perfil';
import { InicioPage } from '../inicio/inicio';

@IonicPage()
@Component({
  selector: 'page-peliculas',
  templateUrl: 'peliculas.html',
})
export class PeliculasPage {

  usuario;

  public isSearchbarOpened = false;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.usuario = 'Gorguess'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeliculasPage');
  }

  goToPerfil() {
    this.navCtrl.push(PerfilPage);
  }

  goToInicio() {
    this.navCtrl.push(InicioPage);
  }

}
