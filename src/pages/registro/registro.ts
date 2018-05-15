import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { OnInit } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage implements OnInit {

  formularioUsuario: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
  ) {
  }

  ngOnInit() {

    this.formularioUsuario = new FormGroup({
      name: new FormControl('', [Validators.required]),
      user: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      pass: new FormControl('', [Validators.pattern(/^[a-z0-9_-]{10,18}$/)]),
      pass2: new FormControl('', [Validators.required, this.equalto('pass')])
    });
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad HomePage');
  // }

  gotoHome() {
    this.navCtrl.push(HomePage);
  }

  /**
   * evento que se ejecuta al enviar la informacion, este solo cumple la funcion de mostrar un mensaje de informacion,
   * resetea el formulario y sus validaciones y limpia el parametro datosUsuario para el nuevo ingreso de informacion.
   */
  saveData() {
    console.log(this.formularioUsuario.value);
    this.ngOnInit();
    this.loginLoading();
  }


  equalto(field_name): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {

      let input = control.value;

      let isValid = control.root.value[field_name] == input
      if (!isValid)
        return { 'equalTo': { isValid } }
      else
        return null;
    };
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
      this.gotoHome();
    },
      2000);
  }

}
