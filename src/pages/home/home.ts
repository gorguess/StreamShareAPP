import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { RegistroPage } from '../registro/registro';
import { InicioPage } from '../inicio/inicio';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  formularioUsuario: FormGroup;
  mensaje: any;
  @ViewChild("emailad") emailAddress;
  @ViewChild("password") currentPassword;
  login: Array <any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    public comprobarLogin: LoginProvider
  ) {
  }

  ngOnInit() {

    this.formularioUsuario = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      pass: new FormControl('', [Validators.pattern(/^[a-z0-9_-]{5,18}$/)])
    });
  }

  goToRegistro() {
    this.navCtrl.push(RegistroPage);
  }

  alert(){
    this.alertCtrl.create({
      title: 'There was a problem!',
      subTitle: 'The email/username or password are not correct',
      buttons: ['OK']
    }).present();
  }

  goToInicio() {
    this.login = [{ emailNick: this.emailAddress.value, password: this.currentPassword.value, gettoken:true }];
    this.comprobarLogin.loginUsers(this.login).subscribe((datos) => {
      var contenedor = datos["user"];
      this.loginLoading(contenedor);    
    }, (err) => {
      this.alert();
    });
  }

  loginLoading(contenido) {
    this.ngOnInit();
    let loading = this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 2000,
      dismissOnPageChange: true
    });

    loading.present();
    setTimeout(() => {
      this.navCtrl.push(InicioPage, {
        // birthday: contenedor["birthdate"],
        // image: contenedor["image"],
        // name: contenedor["name"],
        // nickname: contenedor["nickname"],
        // role: contenedor["role"],
        // surname: contenedor["surname"],
        data: contenido
      });
    },
      2000);
  }

}
