import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  usuario;
  perfilImg;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.usuario = "Gorguess";
    this.perfilImg = "assets/imgs/profile.png";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

}
