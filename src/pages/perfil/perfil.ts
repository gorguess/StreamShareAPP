import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import { Subject } from 'rxjs';
import { PeliculasPage } from '../peliculas/peliculas';
import { InicioPage } from '../inicio/inicio';
import { IMobiscroll } from '@mobiscroll/angular/src/js/core/core';
import {
  mobiscroll,
  MbscEventcalendarOptions,
  MbscRangeOptions,
  MbscFormOptions,
  MbscRange,
  MbscEventcalendar
} from '@mobiscroll/angular';

let now = new Date();

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  @ViewChild('mbscRange')
  range: MbscRange;

  @ViewChild('mbscEventCal')
  eventCal: MbscEventcalendar;

  @ViewChild('fecha')
  fecha;

  items;
  usuario;
  nombre;
  perfilImg;
  descripcion = false;
  contenidoDescripcion = [];
  
  eventDate: Array<Date> = [now, new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 2)];
  isBusy: string = 'busy';
  eventText: string = '';
  events: Array<any> = [{
    d: new Date(),
    text: 'New chapter of Mr Robot'
  }];

  public event = false;
  public isSearchbarOpened = false;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController
  ) {
    this.nombre = "Jorge Sánchez";
    this.usuario = "Gorguess";
    this.perfilImg = "assets/imgs/profile.png";
  }


  newEvent() {
    this.event = true;
  }

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

  formSettings: MbscFormOptions = {
    theme: 'ios'
  };

  addEvent() {
    this.events.push({
      start: new Date(this.fecha.value.year, this.fecha.value.month-1, this.fecha.value.day, 14, 30),
      text: this.eventText || 'New Event',
    });
    this.eventText = '';
    this.eventCal.instance.setVal(new Date(this.fecha.value.year, this.fecha.value.month-1, this.fecha.value.day, 14, 30));
  };


  goToPeliculas() {
    this.navCtrl.push(PeliculasPage);
  }

  goToInicio() {
    this.navCtrl.push(InicioPage);
  }

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
