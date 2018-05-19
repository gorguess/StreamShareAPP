import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import { Subject } from 'rxjs';
import { MbscEventcalendarOptions } from '@mobiscroll/angular';

let now = new Date();

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  items;
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

  events: Array<any> = [{
    d: new Date(now.getFullYear(), now.getMonth(), 7, 14, 0),
    text: 'New Chapter of Prison Break',
    color: '#6e7f29'
  }];
  
  eventSettings: MbscEventcalendarOptions = {
    theme: 'material',
    lang: 'en',
    display: 'inline',
    layout: 'liquid',
    view: {
      calendar: { type: 'month' },
      eventList: { type: 'month' }
    }
  };


  listado() {
    this.items = [
      'Amsterdam',
      'Bogota',
      'Buenos Aires',
      'Cairo',
      'Dhaka',
      'Edinburgh',
      'Geneva',
      'Genoa',
      'Glasglow',
      'Hanoi',
      'Hong Kong',
      'Islamabad',
      'Istanbul',
      'Jakarta',
      'Kiel',
      'Kyoto',
      'Le Havre',
      'Lebanon',
      'Lhasa',
      'Lima',
      'London',
      'Los Angeles',
      'Madrid',
      'Manila',
      'New York',
      'Olympia',
      'Oslo',
      'Panama City',
      'Peking',
      'Philadelphia',
      'San Francisco',
      'Seoul',
      'Taipeh',
      'Tel Aviv',
      'Tokio',
      'Uelzen',
      'Washington'
    ];
  }

  getItems(ev) {
    var val = ev.target.value;

    if (val && val.trim() != '') {
      this.listado();
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      return;
    }
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
