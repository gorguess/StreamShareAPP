import { Component, OnInit, DoCheck } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, MenuController } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { PeliculasPage } from '../peliculas/peliculas';
import { VerTodoPage } from '../ver-todo/ver-todo';
import { LoginProvider } from '../../providers/login/login';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { InfoPage } from '../info/info';

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
  providers: [LoginProvider]
})
export class InicioPage implements OnInit, DoCheck {
  trustedUrl: any;
  avatarUrl: any;
  identity: any;
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
    public menuCtrl: MenuController,
    private comprobarLogin: LoginProvider,
    private sanitizer: DomSanitizer
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

  goToInfo(fotoPeli, titulo) {
    this.navCtrl.push(InfoPage, {
      foto: fotoPeli,
      nombre: titulo,
      data: this.contenedor
    });
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

ngOnInit(){
  this.identity = this.comprobarLogin.getIdentity();
  this.avatarUrl = this.comprobarLogin.getImageAvatar();
  this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.avatarUrl)
  }


  ngDoCheck(){
    this.identity = this.comprobarLogin.getIdentity();
    this.avatarUrl = this.comprobarLogin.getImageAvatar();
    this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.avatarUrl)
  }
}
