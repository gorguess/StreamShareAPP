import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { PeliculasPage } from '../peliculas/peliculas';

@IonicPage()
@Component({
  selector: 'page-ver-todo',
  templateUrl: 'ver-todo.html',
})
export class VerTodoPage {
  tipoContenido;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.tipoContenido = navParams.data['tipo'];
    console.log('tipo: ', this.tipoContenido);
  }

  ionViewDidLoad() {
    if (this.tipoContenido === 'peliculaVista') {
      console.log('1');
    } else if (this.tipoContenido === 'serieVista') {
      console.log('2');
    } else if (this.tipoContenido === 'favorito') {
      console.log('3');
    } else {
      console.log('Ha ocurrido un error');
    }
  }

}
