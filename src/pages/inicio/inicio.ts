import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, MenuController } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { PeliculasPage } from '../peliculas/peliculas';
import { VerTodoPage } from '../ver-todo/ver-todo';


@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {
  items;
  peli1;
  peli2;
  peli3;
  serie1;
  serie2;
  titulo1;
  titulo2;
  titulo3;
  titulo4;
  titulo5;
  cont = 4;
  seeAll: boolean = false;
  nombreUsuario;
  contenedor;

  public isSearchbarOpened = false;
  constructor(
    public navCtrl: NavController, 
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public menuCtrl: MenuController
  ) {
    this.peli1 = "assets/imgs/peli1.jpg";
    this.peli2 = "assets/imgs/peli2.jpg";
    this.peli3 = "assets/imgs/peli3.jpg";
    this.serie1 = "assets/imgs/serie1.jpg";
    this.serie2 = "assets/imgs/serie2.jpg";
    this.titulo1 = "Deadpool";
    this.titulo2 = "Avengers 2";
    this.titulo3 = "Hasta el último Hombre";
    this.titulo4 = "Breaking Bad";
    this.titulo5 = "Prison Break";
    this.contenedor = navParams.data['data'];
    this.nombreUsuario = this.contenedor['nickname'];
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

  goToPerfil() {
    this.navCtrl.push(PerfilPage, {
      data: this.contenedor
    });
  }

  goToSeeAll(contenido: string){
    this.navCtrl.push(VerTodoPage, {
      tipo: contenido,
      data: this.contenedor
    });
  }

  goToPeliculas() {
    this.navCtrl.push(PeliculasPage, {
      data: this.contenedor
    });
  }

  ionViewDidLoad() {
    if (this.cont > 3) {
      this.seeAll = true;
    }
  }

}
