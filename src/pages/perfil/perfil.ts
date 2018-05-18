import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  usuario;
  nombre;
  perfilImg;
  descripcion = false;
  contenidoDescripcion = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController
  ) {
    this.nombre = "Jorge Sánchez";
    this.usuario = "Gorguess";
    this.perfilImg = "assets/imgs/profile.png";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }
  goToChat() {
    this.navCtrl.push(ChatPage);
  }
  descriptionType() {
    let prompt = this.alertCtrl.create({
      title: 'Description',
      message: "Enter a description of yourself to add it to your profile",
      inputs: [
        {
          name: 'Description:',
          placeholder: 'Description'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.descripcion = true;
            this.contenidoDescripcion = [];
            for (var key in data) {
              this.contenidoDescripcion.push(data[key]);
            }
          }
        }
      ]
    });
    prompt.present();
  }
  nameType() {
    let prompt = this.alertCtrl.create({
      title: 'Name',
      message: "Enter your new name to add it to your profile",
      inputs: [
        {
          name: 'Name:',
          placeholder: 'Name'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.nombre = [];
            for (var key in data) {
              this.nombre.push(data[key]);
            }
          }
        }
      ]
    });
    prompt.present();
  }
  userType() {
    let prompt = this.alertCtrl.create({
      title: 'Username',
      message: "Enter your new username to add it to your profile",
      inputs: [
        {
          name: 'Username:',
          placeholder: 'Username'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.usuario = [];
            for (var key in data) {
              this.usuario.push(data[key]);
            }
          }
        }
      ]
    });
    prompt.present();
  }
}
