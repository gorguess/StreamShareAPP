import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { OnInit } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage implements OnInit {

  formularioUsuario: FormGroup;
  @ViewChild("emailad") emailAddress;
  @ViewChild("username") userName;
  @ViewChild("name") nombre;
  @ViewChild("password") currentPassword;
  arrayDatos = [];
  emailForm: string = '';
  nombreForm: string = '';
  usuarioForm: string = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private fire: AngularFireAuth
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

  saveAllData(){
    var messagesRef = firebase.database().ref().child("datosUsuario");
    messagesRef.push({ 
      email: this.emailForm, 
      nombre: this.nombreForm, 
      usuario: this.usuarioForm 
    });
    this.loginLoading();
  }

  /**
   * evento que se ejecuta al enviar la informacion, este solo cumple la funcion de mostrar un mensaje de informacion,
   * resetea el formulario y sus validaciones y limpia el parametro datosUsuario para el nuevo ingreso de informacion.
   */
  saveData() {
    this.emailForm = this.formularioUsuario.value.email;
    this.nombreForm = this.formularioUsuario.value.name;
    this.usuarioForm = this.formularioUsuario.value.user;
    this.ngOnInit();
    this.fire.auth.createUserWithEmailAndPassword(this.emailAddress.value, this.currentPassword.value)
    .then(data => {
      console.log(data);
      this.saveAllData();
    })
    .catch(error => {
      console.log('got an error', error);
    })
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
