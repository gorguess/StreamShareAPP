import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
import { InicioPage } from '../inicio/inicio';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  formularioUsuario: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController
  ) {
  }

  ngOnInit() {

    this.formularioUsuario = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      pass: new FormControl('', [Validators.pattern(/^[a-z0-9_-]{10,18}$/)])
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  goToRegistro() {
    this.navCtrl.push(RegistroPage);
  }

  goToInicio() {
    this.navCtrl.push(InicioPage);
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
    let loading = this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    });

    loading.present();
  }

}
