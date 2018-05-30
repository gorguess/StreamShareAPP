import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
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
  nombreUsuario;
  contenedor;
  nombre;
  apellido;
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
    private alertCtrl: AlertController,
    private camera: Camera
  ) {
    this.contenedor = navParams.data['data'];
    this.nombreUsuario = this.contenedor['nickname'];
    this.nombre = this.contenedor['name'];
    this.apellido = this.contenedor['surname'];
    this.perfilImg = this.contenedor['image'];
  }

  actionCamera(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      //la imagen va a estar codificada (base64)
      this.perfilImg = 'data:image/png;base64,' + imageData;
    }, (err) => {
      console.log(err);
    })
  }

  accessGallery() {
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      destinationType: this.camera.DestinationType.DATA_URL
    }).then((imageData) => {
      this.perfilImg = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
    });
  }

  showMethods() {
    let confirm = this.alertCtrl.create({
      title: 'Choose one method',
      message: "Do you want to choose the photo from your mobile's galery or you prefer take a photo?",
      buttons: [
        {
          text: 'Galery',
          handler: () => {
            this.accessGallery();
          }
        },
        {
          text: 'Take a Photo',
          handler: () => {
            this.actionCamera();
          }
        }
      ]
    });
    confirm.present();
  }

  ionViewDidLoad() {
    if (!this.perfilImg) {
      this.perfilImg = "assets/imgs/profileNull.png";
    }
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
      start: new Date(this.fecha.element.value),
      text: this.eventText || 'New Event',
    });
    this.eventText = '';
    this.eventCal.instance.setVal(new Date(this.fecha.element.value));
    this.event = false;
  };

  closeEvent(){
    this.event = false;
  }

  goToPeliculas() {
    this.navCtrl.push(PeliculasPage, {
      data: this.contenedor
    });
  }

  goToInicio() {
    this.navCtrl.push(InicioPage, {
      data: this.contenedor
    });
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
            this.nombreUsuario = [];
            for (var key in data) {
              this.nombreUsuario.push(data[key]);
              this.contenedor['nickname'] = this.nombreUsuario;
            }
          }
        }
      ]
    });
    prompt.present();
  }
}
