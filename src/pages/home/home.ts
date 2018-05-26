import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from 'ionic-angular';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
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
  objetoUser: any;
  objetoPass: any;
  mensaje: any;
  @ViewChild("emailad") emailAddress;
  @ViewChild("password") currentPassword;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private fire: AngularFireAuth,
    private alertCtrl: AlertController,
    public comprobarLogin: LoginProvider
  ) {
  }

  ngOnInit() {

    this.formularioUsuario = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      pass: new FormControl('', [Validators.pattern(/^[a-z0-9_-]{10,18}$/)])
    });
  }

  ionViewDidLoad() {
    this.comprobarLogin.getUsers().subscribe((datos) => {
      this.objetoUser = datos["user"];
      this.objetoPass = datos["pass"];
      console.log(this.objetoUser);
    },
    (err) => {
      console.log(err["message"]);
    });
  }

  goToRegistro() {
    this.navCtrl.push(RegistroPage);
  }

  alert(mensaje: string){
    this.alertCtrl.create({
      title: '¡Ha ocurrido un error!',
      subTitle: mensaje,
      buttons: ['OK']
    }).present();
  }

  goToInicio() {
    this.fire.auth.signInWithEmailAndPassword(this.emailAddress.value, this.currentPassword.value)
    .then(data => {
      this.loginLoading();
    })
    .catch ( error => {
      this.alert(error.message);
    })
    console.log('would sign in with ', this.emailAddress.value, this.currentPassword.value);

    
  }

  /**
   * evento que se ejecuta al enviar la informacion, este solo cumple la funcion de mostrar un mensaje de informacion,
   * resetea el formulario y sus validaciones y limpia el parametro datosUsuario para el nuevo ingreso de informacion.
   */
  saveData() {
    console.log(this.formularioUsuario.value);
    this.loginLoading();
  }

  loginLoading() {
    this.ngOnInit();
    let loading = this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 2000,
      dismissOnPageChange: true
    });

    loading.present();
    setTimeout(() => {
      this.navCtrl.push(InicioPage);
    },
      2000);
  }

}
