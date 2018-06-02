webpackJsonp([13],{

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GLOBAL; });
var GLOBAL = {
    url: 'http://ec2-18-217-133-241.us-east-2.compute.amazonaws.com:9000/api/'
};
//# sourceMappingURL=global.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatPage = (function () {
    function ChatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userName = ""; //nombre del usuario
        this.message = ""; //mensaje enviado
        this.messagesArray = []; //array que contendrá el nombre de usuario y mensaje que traemos del servidor
        this.getMessages(); //llamamos a esta función siempre que se inicie la vista
    }
    ChatPage.prototype.getMessages = function () {
        var _this = this;
        var messagesRef = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref().child("mensajes"); //vamos a guardar en esta variable, el 
        //contenido de la carpeta "mensajes" de firebase (nuestro repositorio de datos)
        messagesRef.on("value", function (snap) {
            //"messagesRef", osea que un usuario envie datos nuevos
            var data = snap.val(); //guardamos el valor de "snap" en la variable data
            _this.messagesArray = []; // inicialiamos nuestro array declarado arriba (global para este fichero)
            for (var key in data) {
                _this.messagesArray.push(data[key]); //guarda cada información del contenido de firebase, en una 
                //posición del array. Dicha posición la define el contador del bucle for
            }
            _this.scrollToBottom(); //con esto llamamos a la función para hacer scroll
        });
    };
    ChatPage.prototype.scrollToBottom = function () {
        var contentEnd = document.getElementById("content-end").offsetTop; //sacamos toda la información del 
        //elemento identificado en el HTML con el id "content-end"
        this.content.scrollTo(0, contentEnd, 300); //decimos que nos haga un scroll automático, hasta la 
        //posición del eje Y que tiene nuestro div con id "content-end", y con un retardo de 300 milisegundos
    };
    ChatPage.prototype.sendMessage = function () {
        var messagesRef = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref().child("mensajes"); //sacamos el contenido de "mensajes",
        //nuestra carpeta en nuestro repositorio firebase, para no pisar su contenido
        messagesRef.push({ mensaje: this.message, nombre: this.userName }); //al contenido obtenido del 
        //repositorio explicado arriba, le añadimos el nombre de usuario y el mensaje que quiere enviar (push 
        //al servidor)
        this.message = ""; //y volvemos a dejar la variable que contenía el mensaje a vacío, para que el 
        //input para volver a escribir un nuevo mensaje aparezca vacío
    };
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("content"),
        __metadata("design:type", Object)
    ], ChatPage.prototype, "content", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\chat\chat.html"*/'<!-- Cabecera de la pantalla donde pondremos el título, y el nombre de usuario que se ha conectado -->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Chat Online\n      <ion-input placeholder="¿Quién eres?" [(ngModel)]="userName"></ion-input>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!-- En el contenido de la página, crearemos un "card" con el nombre de usuario y el mensaje enviado con un \nbucle for -->\n<ion-content #content padding>\n  <ion-card *ngFor="let message of messagesArray">\n    <ion-card-header>\n      <!-- En el header del card ponemos el nombre del usuario -->\n      {{message.nombre}}: <!-- Sacamos el contenido de la carpeta "nombre" (nombre de la carpeta guardada\n        en el repositorio), que se encuentra guardada en la variable "message", declarada en el archivo \n        Typescript de esta vista  -->\n    </ion-card-header>\n    <ion-card-content>\n      <!-- En el contenido del card ponemos el mensaje del usuario -->\n      {{message.mensaje}}\n    </ion-card-content>\n  </ion-card>\n  <!-- Este div sirve para saber en que posición se encuentra el último mensaje enviado -->\n  <div id="content-end"></div>\n</ion-content>\n\n<!-- En el footer ponemos un input donde escribir y un botón que envía lo escrito en el input -->\n<ion-footer>\n  <ion-toolbar>\n    <!-- Lo escrito en el input lo guardamos en la variable "message" usando ngModel (jQuery) -->\n    <ion-input placeholder="Escribir mensaje" [(ngModel)]="message"></ion-input>\n    <ion-buttons end>\n      <button ion-button icon-only clear (click)="sendMessage()">\n        Enviar\n        <ion-icon name="send"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\chat\chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerTodoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perfil_perfil__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__peliculas_peliculas__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inicio_inicio__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VerTodoPage = (function () {
    function VerTodoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tipoContenido = navParams.data['tipo'];
        console.log('tipo: ', this.tipoContenido);
    }
    VerTodoPage.prototype.ionViewDidLoad = function () {
        if (this.tipoContenido === 'peliculaVista') {
            console.log('1');
        }
        else if (this.tipoContenido === 'serieVista') {
            console.log('2');
        }
        else if (this.tipoContenido === 'favorito') {
            console.log('3');
        }
        else {
            console.log('Ha ocurrido un error');
        }
    };
    VerTodoPage.prototype.goToPerfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__perfil_perfil__["a" /* PerfilPage */]);
    };
    VerTodoPage.prototype.goToPeliculas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__peliculas_peliculas__["a" /* PeliculasPage */]);
    };
    VerTodoPage.prototype.goToInicio = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__inicio_inicio__["a" /* InicioPage */]);
    };
    VerTodoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-ver-todo',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\ver-todo\ver-todo.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n\n    <ion-grid *ngIf="!isSearchbarOpened">\n      <ion-row>\n        <ion-col col-auto>\n          <ion-buttons>\n            <button ion-button icon-only (click)="goToInicio()">\n              Home\n            </button>\n          </ion-buttons>\n        </ion-col>\n\n        <ion-col col-auto>\n          <ion-buttons>\n            <button ion-button icon-only (click)="goToPeliculas()">\n              Films\n            </button>\n          </ion-buttons>\n        </ion-col>\n\n        <ion-col col-auto>\n          <ion-buttons>\n            <button ion-button icon-only (click)="goToSeries()">\n              Series\n            </button>\n          </ion-buttons>\n        </ion-col>\n\n        <ion-col col-auto>\n          <ion-buttons>\n            <button ion-button icon-only (click)="goToPerfil()">\n              {{ usuario }}\n              <ion-icon name="md-contact"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n\n        <ion-col col-1>\n          <ion-buttons>\n            <button ion-button icon-only (click)="isSearchbarOpened=true">\n              <ion-icon name="search"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n\n    <ion-searchbar *ngIf="isSearchbarOpened" showCancelButton="true" (ionCancel)="isSearchbarOpened=false" (ionInput)="getItems($event)">\n    </ion-searchbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\ver-todo\ver-todo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], VerTodoPage);
    return VerTodoPage;
}());

//# sourceMappingURL=ver-todo.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_login__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registro_registro__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inicio_inicio__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_userLogin__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = (function () {
    function HomePage(navCtrl, navParams, loadingCtrl, alertCtrl, comprobarLogin, _sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.comprobarLogin = comprobarLogin;
        this._sanitizer = _sanitizer;
        this.userLogin = new __WEBPACK_IMPORTED_MODULE_6__models_userLogin__["a" /* UserLogin */]('', '', '', '');
    }
    HomePage.prototype.ngOnInit = function () {
        this.formularioUsuario = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
            pass: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern(/^[a-z0-9_-]{4,18}$/)])
        });
        this.avatarUrl = this.comprobarLogin.getImageAvatar();
        this.trustedUrl = this._sanitizer.bypassSecurityTrustUrl(this.avatarUrl);
    };
    HomePage.prototype.goToRegistro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__registro_registro__["a" /* RegistroPage */]);
    };
    HomePage.prototype.alert = function () {
        this.alertCtrl.create({
            title: 'There was a problem!',
            subTitle: 'The email/username or password are not correct',
            buttons: ['OK']
        }).present();
    };
    HomePage.prototype.goToInicio = function () {
        var _this = this;
        this.login = [{ emailNick: this.emailAddress.value, password: this.currentPassword.value, gettoken: null }];
        this.comprobarLogin.loginUsers(this.login).subscribe(function (datos) {
            var contenedor = datos["user"];
            //Modificacion LOGIN Persistencia del usuario y recogida del token Parte I
            localStorage.setItem('user', JSON.stringify(contenedor));
            _this.getToken(contenedor, _this.login);
        }, function (err) {
            _this.alert();
        });
    };
    //Recogemos las estadisticas en cuanto a seguimientos del usuario y la guardamos en LocalStorage para su uso
    HomePage.prototype.getCounter = function (contenedor) {
        var _this = this;
        this.comprobarLogin.getCounter(localStorage.getItem('token')).subscribe(function (response) {
            localStorage.setItem('stats', JSON.stringify(response));
            _this.status = 'Success';
            _this.errorDetails = 'Login successful, enjoy!!';
            _this.comprobarLogin.getAvatar(_this.token, contenedor.image).subscribe(function (response) {
                console.log(response);
                var file = new Blob([response], { type: 'image/jpeg' });
                var fileURL = URL.createObjectURL(file);
                localStorage.setItem('avatar', fileURL);
                _this.loginLoading(contenedor);
            }, function (err) {
                console.log(err);
            });
        }, function (error) {
            console.log(error);
        });
    };
    //Generamos el token del usuario para que pueda ser usado.
    HomePage.prototype.getToken = function (contenedor, login) {
        var _this = this;
        login[0].gettoken = true;
        console.log(login);
        this.comprobarLogin.loginUsers(this.login).subscribe(function (response) {
            console.log(response);
            _this.token = response["token"];
            if (_this.token.length <= 0) {
                _this.status = 'error';
                _this.errorDetails = 'Error al generar el token';
            }
            else {
                localStorage.setItem('token', _this.token);
                _this.getCounter(contenedor);
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                _this.status = 'Error';
                _this.errorDetails = 'User/email or password incorrect, try again!';
            }
        });
    };
    HomePage.prototype.loginLoading = function (contenido) {
        var _this = this;
        this.ngOnInit();
        var loading = this.loadingCtrl.create({
            content: 'Please wait...',
            duration: 2000,
            dismissOnPageChange: true
        });
        loading.present();
        setTimeout(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__inicio_inicio__["a" /* InicioPage */], {
                // birthday: contenedor["birthdate"],
                // image: contenedor["image"],
                // name: contenedor["name"],
                // nickname: contenedor["nickname"],
                // role: contenedor["role"],
                // surname: contenedor["surname"],
                data: contenido
            });
        }, 2000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("emailad"),
        __metadata("design:type", Object)
    ], HomePage.prototype, "emailAddress", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("password"),
        __metadata("design:type", Object)
    ], HomePage.prototype, "currentPassword", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\home\home.html"*/'<ion-content class="vertical-align-content">\n\n  <ion-grid>\n\n  <ion-row>\n\n    <ion-col col-12>\n\n      <!-- Creamos una "tarjeta" en la que vendrá diseñado nuestro formulario de inicio de sesión -->\n\n      <ion-card>\n\n        <!-- Cabecera -->\n\n        <ion-card-header>\n\n          <p class="header">Sign Up</p>\n\n        </ion-card-header>\n\n        <!-- Contenido de nuestro formulario -->\n\n        <ion-card-content>\n\n          <ion-list>\n\n            <!-- Creamos nuestra etiqueta para nuestro formulario, asignándole un nombre de grupo (ID) y una llamada \n\n            a una función de carga mientras comprueba las credenciales (loginLoading)-->\n\n            <form [formGroup]="formularioUsuario" novalidate>\n\n              <ion-item>\n\n                <ion-label floating>Email address</ion-label>\n\n                <!-- Creamos el input para añadir el usuario, y poniendo un id de formulario para sacar el contenido \n\n                de éste-->\n\n                <ion-input type="text" #emailad [(ngModel)]="userLogin.emailNick" name="emailNick" formControlName="email"></ion-input>\n\n              </ion-item>\n\n              <!-- Control de errores de si está rellenando el campo "Password" y el usuario está vacío indique un error -->\n\n              <ion-item *ngIf="formularioUsuario.get(\'email\').errors && formularioUsuario.get(\'email\').dirty">\n\n                <p color="danger" ion-text *ngIf="formularioUsuario.get(\'email\').hasError(\'required\')" class="error">\n\n                  Email is required.\n\n                </p>\n\n                <p color="danger" ion-text *ngIf="formularioUsuario.get(\'email\').hasError(\'pattern\')">\n\n                  It is not an email\n\n                </p>\n\n              </ion-item>\n\n            \n\n              <ion-item>\n\n                <ion-label floating>Password</ion-label>\n\n                <!-- Creamos el input para la contraseña -->\n\n                <ion-input type="password" #password [(ngModel)]="userLogin.password" name="password" formControlName="pass"></ion-input>\n\n              </ion-item>\n\n              <!-- Control de errores de si está vacío, o tiene menos de 10 caracteres, indique un error -->\n\n              <ion-item *ngIf="formularioUsuario.get(\'pass\').errors && formularioUsuario.get(\'pass\').dirty">\n\n                <p color="danger" ion-text *ngIf="formularioUsuario.get(\'pass\').hasError(\'pattern\')" class="error">\n\n                  It is not a strong password.\n\n                </p>\n\n              </ion-item>\n\n\n\n\n\n              <br>\n\n              <!-- Creamos el botón de inicio de sesión, que permanecerá desactivado, hasta que los campos del formulario\n\n              estén correctamente rellenos superando el control de errores -->\n\n              <ion-grid padding-top>\n\n                <ion-row justify-content-center>\n\n                  <div class="col-1" align-self-center>\n\n                    <div>\n\n                      <button ion-button type="submit" [disabled]="!formularioUsuario.valid" (click)="goToInicio()">Submit</button>\n\n                    </div>\n\n                  </div>\n\n                </ion-row>\n\n              </ion-grid>\n\n\n\n              <ion-grid>\n\n                <ion-row justify-content-center padding-top>\n\n                  <div align-self-center>\n\n                    <div>Or</div>\n\n                  </div>\n\n                </ion-row>\n\n                <ion-row justify-content-center padding-top>\n\n                  <div align-self-center>\n\n                    <div>\n\n                      <!-- <a (click)="goToRegistry()"> -->\n\n                      <a (click)="goToRegistro()">\n\n                        <strong>Sign Up Now!</strong>\n\n                      </a>\n\n                    </div>\n\n                  </div>\n\n                </ion-row>\n\n              </ion-grid>\n\n            </form>\n\n          \n\n          </ion-list>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\home\home.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_login_login__["a" /* LoginProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_login_login__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["c" /* DomSanitizer */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_login__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegistroPage = (function () {
    function RegistroPage(navCtrl, navParams, loadingCtrl, alertCtrl, comprobarLogin) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.comprobarLogin = comprobarLogin;
    }
    RegistroPage.prototype.ngOnInit = function () {
        this.formularioUsuario = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            surname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            nickname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
            pass: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern(/^[a-z0-9_-]{5,18}$/)]),
            pass2: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, this.equalto('pass')])
        });
    };
    RegistroPage.prototype.gotoHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    RegistroPage.prototype.equalto = function (field_name) {
        return function (control) {
            var input = control.value;
            var isValid = control.root.value[field_name] == input;
            if (!isValid)
                return { 'equalTo': { isValid: isValid } };
            else
                return null;
        };
    };
    RegistroPage.prototype.alert = function () {
        this.alertCtrl.create({
            title: 'There was a problem!',
            subTitle: 'This user alredy exists',
            buttons: ['OK']
        }).present();
    };
    RegistroPage.prototype.registerUsers = function () {
        var _this = this;
        this.registro = [{
                name: this.nombre.value,
                surname: this.apellidos.value,
                nickname: this.username.value,
                email: this.emailAddress.value,
                birthdate: this.birthday.value["day"] +
                    '/' + this.birthday.value["month"] +
                    '/' + this.birthday.value["year"],
                password: this.currentPassword.value
            }];
        this.comprobarLogin.registerUsers(this.registro).subscribe(function (datos) {
            console.log('Datos: ', datos);
            if (datos['message'] == 'Este usuario ya existe') {
                _this.alert();
            }
            else {
                _this.loginLoading();
            }
        }, function (err) {
            console.log(err["message"]);
        });
    };
    RegistroPage.prototype.loginLoading = function () {
        var _this = this;
        this.ngOnInit();
        var loading = this.loadingCtrl.create({
            content: 'Please wait...',
            duration: 2000,
            dismissOnPageChange: true
        });
        loading.present();
        setTimeout(function () {
            _this.gotoHome();
        }, 2000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("name"),
        __metadata("design:type", Object)
    ], RegistroPage.prototype, "nombre", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("surname"),
        __metadata("design:type", Object)
    ], RegistroPage.prototype, "apellidos", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("nickname"),
        __metadata("design:type", Object)
    ], RegistroPage.prototype, "username", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("birthday"),
        __metadata("design:type", Object)
    ], RegistroPage.prototype, "birthday", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("emailad"),
        __metadata("design:type", Object)
    ], RegistroPage.prototype, "emailAddress", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("password"),
        __metadata("design:type", Object)
    ], RegistroPage.prototype, "currentPassword", void 0);
    RegistroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-registro',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\registro\registro.html"*/'<ion-content>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-card>\n\n          <ion-card-header>\n\n            <p class="header">Registration</p>\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            <ion-list>\n\n              <form [formGroup]="formularioUsuario" novalidate>\n\n                <ion-item>\n\n                  <ion-label floating>Name *</ion-label>\n\n                  <ion-input formControlName="name" #name type="text"></ion-input>\n\n                </ion-item>\n\n                <ion-item *ngIf="formularioUsuario.get(\'name\').errors && formularioUsuario.get(\'name\').dirty">\n\n                  <p color="danger" ion-text *ngIf="formularioUsuario.get(\'name\').hasError(\'required\')">Your name is required</p>\n\n                </ion-item>\n\n                <ion-item>\n\n                  <ion-label floating>Surname *</ion-label>\n\n                  <ion-input formControlName="surname" #surname type="text"></ion-input>\n\n                </ion-item>\n\n                <ion-item *ngIf="formularioUsuario.get(\'surname\').errors && formularioUsuario.get(\'surname\').dirty">\n\n                  <p color="danger" ion-text *ngIf="formularioUsuario.get(\'surname\').hasError(\'required\')">Your surname is required</p>\n\n                </ion-item>\n\n                <ion-item>\n\n                  <ion-label floating>Nickname *</ion-label>\n\n                  <ion-input type="text" #nickname formControlName="nickname"></ion-input>\n\n                </ion-item>\n\n                <ion-item *ngIf="formularioUsuario.get(\'nickname\').errors && formularioUsuario.get(\'nickname\').dirty">\n\n                  <p color="danger" ion-text *ngIf="formularioUsuario.get(\'nickname\').hasError(\'required\')" class="error">\n\n                    nickname is required.\n\n                  </p>\n\n                </ion-item>\n\n                <ion-item>\n\n                  <ion-label floating>Birthday</ion-label>\n\n                  <ion-datetime #birthday displayFormat="MM/DD/YYYY"></ion-datetime>\n\n                </ion-item>\n\n                <ion-item>\n\n                  <ion-label floating>Email address *</ion-label>\n\n                  <ion-input type="email" #emailad formControlName="email"></ion-input>\n\n                </ion-item>\n\n                <!-- Control de errores de si está rellenando el campo "Password" y el usuario está vacío indique un error -->\n\n                <ion-item *ngIf="formularioUsuario.get(\'email\').errors && formularioUsuario.get(\'email\').dirty">\n\n                  <p color="danger" ion-text *ngIf="formularioUsuario.get(\'email\').hasError(\'required\')" class="error">\n\n                    Email is required.\n\n                  </p>\n\n                  <p color="danger" ion-text *ngIf="formularioUsuario.get(\'email\').hasError(\'pattern\')">\n\n                    It is not an email\n\n                  </p>\n\n                </ion-item>\n\n                <ion-item>\n\n                  <ion-label floating>Password *</ion-label>\n\n                  <!-- Creamos el input para la contraseña -->\n\n                  <ion-input type="password" name="pass" formControlName="pass"></ion-input>\n\n                </ion-item>\n\n                <!-- Control de errores de si está vacío, o tiene menos de 10 caracteres, indique un error -->\n\n                <ion-item *ngIf="formularioUsuario.get(\'pass\').errors && formularioUsuario.get(\'pass\').dirty">\n\n                  <p color="danger" ion-text *ngIf="formularioUsuario.get(\'pass\').hasError(\'pattern\')" class="error">\n\n                    It is not a strong password.\n\n                  </p>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                  <ion-label floating>Confirm password *</ion-label>\n\n                  <!-- Creamos el input para la contraseña -->\n\n                  <ion-input type="password" #password formControlName="pass2"></ion-input>\n\n                </ion-item>\n\n                <!-- Control de errores de si está vacío, o tiene menos de 10 caracteres, indique un error -->\n\n                <ion-item *ngIf="(formularioUsuario.get(\'pass2\').hasError(\'equalTo\') || formularioUsuario.get(\'pass2\').hasError(\'required\')) && formularioUsuario.get(\'pass2\').touched">\n\n                  <p color="danger" ion-text *ngIf="formularioUsuario.get(\'pass2\').hasError(\'required\') && formularioUsuario.get(\'pass2\').touched" class="error">\n\n                    It is not a strong password.\n\n                  </p>\n\n                  <p color="danger" ion-text *ngIf="formularioUsuario.get(\'pass2\').hasError(\'equalTo\') && formularioUsuario.get(\'pass2\').touched" class="error">\n\n                    Passwords do not match\n\n                  </p>\n\n                </ion-item>\n\n\n\n                <br>\n\n                <!-- Creamos el botón de registro, que permanecerá desactivado, hasta que los campos del formulario\n\n              estén correctamente rellenos superando el control de errores -->\n\n                <ion-grid padding-top>\n\n                  <ion-row justify-content-center>\n\n                    <div class="col-1" align-self-center>\n\n                      <div>\n\n                        <button ion-button type="submit" [disabled]="!formularioUsuario.valid" (click)="registerUsers()">Sign Up</button>\n\n                      </div>\n\n                    </div>\n\n                  </ion-row>\n\n                </ion-grid>\n\n\n\n                <ion-grid>\n\n                  <ion-row justify-content-center padding-top>\n\n                    <div align-self-center>\n\n                      <div>Or</div>\n\n                    </div>\n\n                  </ion-row>\n\n                  <ion-row justify-content-center padding-top>\n\n                    <div align-self-center>\n\n                      <div>\n\n                        <!-- <a (click)="goToRegistry()"> -->\n\n                        <a (click)="gotoHome()">\n\n                          <strong>Go to Login Page!</strong>\n\n                        </a>\n\n                      </div>\n\n                    </div>\n\n                  </ion-row>\n\n                </ion-grid>\n\n              </form>\n\n\n\n            </ion-list>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\registro\registro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_login_login__["a" /* LoginProvider */]])
    ], RegistroPage);
    return RegistroPage;
}());

//# sourceMappingURL=registro.js.map

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 179;

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-event/add-event.module": [
		718,
		12
	],
	"../pages/chat/chat.module": [
		719,
		11
	],
	"../pages/edit-event/edit-event.module": [
		720,
		10
	],
	"../pages/header/header.module": [
		721,
		9
	],
	"../pages/home/home.module": [
		722,
		8
	],
	"../pages/info/info.module": [
		723,
		7
	],
	"../pages/inicio/inicio.module": [
		724,
		6
	],
	"../pages/menu/menu.module": [
		725,
		5
	],
	"../pages/peliculas/peliculas.module": [
		726,
		4
	],
	"../pages/perfil/perfil.module": [
		727,
		3
	],
	"../pages/registro/registro.module": [
		728,
		2
	],
	"../pages/ver-todo/ver-todo.module": [
		729,
		1
	],
	"../pages/videoplayer/videoplayer.module": [
		730,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 224;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_global__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieProvider = (function () {
    function MovieProvider(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_2__global_global__["a" /* GLOBAL */].url;
    }
    MovieProvider.prototype.getAllMovies = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-type', 'application/json').set('Authorization', token);
        return this._http.get(this.url + 'getallmovies', { headers: headers });
    };
    MovieProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MovieProvider);
    return MovieProvider;
}());

//# sourceMappingURL=movie.provider.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AddEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddEventPage = (function () {
    function AddEventPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddEventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddEventPage');
    };
    AddEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-event',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\add-event\add-event.html"*/'<!--\n  Generated template for the AddEventPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>add-event</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\add-event\add-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AddEventPage);
    return AddEventPage;
}());

//# sourceMappingURL=add-event.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EditEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditEventPage = (function () {
    function EditEventPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EditEventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditEventPage');
    };
    EditEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-edit-event',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\edit-event\edit-event.html"*/'<!--\n  Generated template for the EditEventPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>edit-event</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\edit-event\edit-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], EditEventPage);
    return EditEventPage;
}());

//# sourceMappingURL=edit-event.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perfil_perfil__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_login__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__peliculas_peliculas__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the HeaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HeaderPage = (function () {
    function HeaderPage(navCtrl, navParams, comprobarLogin, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.comprobarLogin = comprobarLogin;
        this.sanitizer = sanitizer;
    }
    HeaderPage.prototype.ngOnInit = function () {
        this.identity = this.comprobarLogin.getIdentity();
        this.avatarUrl = this.comprobarLogin.getImageAvatar();
        this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.avatarUrl);
    };
    HeaderPage.prototype.ngDoCheck = function () {
        this.identity = this.comprobarLogin.getIdentity();
        this.avatarUrl = this.comprobarLogin.getImageAvatar();
        this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.avatarUrl);
    };
    HeaderPage.prototype.listado = function () {
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
    };
    HeaderPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.listado();
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            return;
        }
    };
    HeaderPage.prototype.goToPerfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__perfil_perfil__["a" /* PerfilPage */], {
            data: this.contenedor
        });
    };
    HeaderPage.prototype.goToPeliculas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__peliculas_peliculas__["a" /* PeliculasPage */], {
            data: this.contenedor
        });
    };
    HeaderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-header',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\header\header.html"*/'<ion-header *ngIf="identity" class="vista">\n\n  <ion-navbar hideBackButton="true">\n\n\n\n    <ion-grid *ngIf="!isSearchbarOpened">\n\n      <ion-row>\n\n        <ion-col col-auto>\n\n          <ion-buttons>\n\n            <button ion-button icon-only>\n\n              Home\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-col>\n\n\n\n        <ion-col col-auto>\n\n          <ion-buttons>\n\n            <button ion-button icon-only (click)="goToPeliculas()">\n\n              Films\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-col>\n\n\n\n        <ion-col col-auto>\n\n          <ion-buttons>\n\n            <button ion-button icon-only (click)="goToSeries()">\n\n              Series\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-col>\n\n\n\n        <ion-col col-auto>\n\n          <ion-buttons>\n\n            <button ion-button icon-only (click)="goToPerfil()">\n\n              {{ identity.nickname }}\n\n              <ion-avatar item-start>\n\n                <img class="userAvatar" [src]="identity.image">\n\n              </ion-avatar>\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-col>\n\n\n\n        <ion-col col-1>\n\n          <ion-buttons>\n\n            <button ion-button icon-only (click)="isSearchbarOpened=true">\n\n              <ion-icon name="search"></ion-icon>\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-col>\n\n\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n    <ion-searchbar *ngIf="isSearchbarOpened" showCancelButton="true" (ionCancel)="isSearchbarOpened=false" (ionInput)="getItems($event)">\n\n    </ion-searchbar>\n\n    <ion-list *ngIf="isSearchbarOpened">\n\n      <button ion-item *ngFor="let item of items" (click)="showDetail(item)">\n\n        {{ item }}\n\n      </button>\n\n    </ion-list>\n\n  </ion-navbar>\n\n</ion-header>'/*ion-inline-end:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\header\header.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_login_login__["a" /* LoginProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_login_login__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]])
    ], HeaderPage);
    return HeaderPage;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio_inicio__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__peliculas_peliculas__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuPage = (function () {
    function MenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__inicio_inicio__["a" /* InicioPage */];
        if (this.destino == "Peliculas") {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_2__inicio_inicio__["a" /* InicioPage */];
            this.pages = [
                { title: 'Películas', component: __WEBPACK_IMPORTED_MODULE_3__peliculas_peliculas__["a" /* PeliculasPage */] }
                // { title: 'Series', component: GeneralPage },
                // { title: 'Perfil', component: ClimaPage }
                // { title: 'Monuments', component: MonumentsPage },
                // { title: 'Festivities', component: FestPage },
                // { title: 'Transport', component: TransportPage },
                // { title: 'Typical food', component: FoodPage }
            ];
        }
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MenuPage.prototype, "nav", void 0);
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\menu\menu.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content right>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(379);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mobiscroll_angular__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_streaming_media__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic2_rating__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_movie_movie_provider__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_home__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_registro_registro__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_inicio_inicio__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_menu_menu__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_ver_todo_ver_todo__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_peliculas_peliculas__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_perfil_perfil__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_chat_chat__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_add_event_add_event__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_edit_event_edit_event__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_info_info__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_login_login__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_header_header__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_videoplayer_videoplayer__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// import { CalendarModule } from 'ionic3-calendar';


















var firebaseAuth = {
    apiKey: "AIzaSyDk2H5Yzy8mp8Q6OOwDQ8gptAFYYbP7x5Y",
    authDomain: "proyecto-final-cfc6c.firebaseapp.com",
    databaseURL: "https://proyecto-final-cfc6c.firebaseio.com",
    projectId: "proyecto-final-cfc6c",
    storageBucket: "proyecto-final-cfc6c.appspot.com",
    messagingSenderId: "878191344149"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_peliculas_peliculas__["a" /* PeliculasPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_add_event_add_event__["a" /* AddEventPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_edit_event_edit_event__["a" /* EditEventPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_ver_todo_ver_todo__["a" /* VerTodoPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_header_header__["a" /* HeaderPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_videoplayer_videoplayer__["a" /* VideoplayerPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__mobiscroll_angular__["b" /* MbscModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-event/add-event.module#AddEventPageModule', name: 'AddEventPage', segment: 'add-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-event/edit-event.module#EditEventPageModule', name: 'EditEventPage', segment: 'edit-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/header/header.module#HeaderPageModule', name: 'HeaderPage', segment: 'header', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info/info.module#InfoPageModule', name: 'InfoPage', segment: 'info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inicio/inicio.module#InicioPageModule', name: 'InicioPage', segment: 'inicio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/peliculas/peliculas.module#PeliculasPageModule', name: 'PeliculasPage', segment: 'peliculas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registro/registro.module#RegistroPageModule', name: 'RegistroPage', segment: 'registro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ver-todo/ver-todo.module#VerTodoPageModule', name: 'VerTodoPage', segment: 'ver-todo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/videoplayer/videoplayer.module#VideoplayerPageModule', name: 'VideoplayerPage', segment: 'videoplayer', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseAuth),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_9_ionic2_rating__["a" /* Ionic2RatingModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_peliculas_peliculas__["a" /* PeliculasPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_add_event_add_event__["a" /* AddEventPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_edit_event_edit_event__["a" /* EditEventPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_ver_todo_ver_todo__["a" /* VerTodoPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_header_header__["a" /* HeaderPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_videoplayer_videoplayer__["a" /* VideoplayerPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_streaming_media__["a" /* StreamingMedia */],
                __WEBPACK_IMPORTED_MODULE_27__providers_login_login__["a" /* LoginProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_movie_movie_provider__["a" /* MovieProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Movie; });
var Movie = (function () {
    function Movie(title, description, genre, category, year, creator, duration, poster, URI, uploadat, userUp) {
    }
    return Movie;
}());

//# sourceMappingURL=movie.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_global__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserProvider = (function () {
    function UserProvider(http) {
        this.http = http;
        console.log('Hello LoginProvider Provider');
        this.url = __WEBPACK_IMPORTED_MODULE_2__global_global__["a" /* GLOBAL */].url;
    }
    UserProvider.prototype.updateUser = function (userUp, token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', token).set('Content-type', 'application/json');
        console.log(userUp);
        return this.http.put(this.url + 'update-user/' + id, userUp, { headers: headers });
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.provider.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLogin; });
var UserLogin = (function () {
    function UserLogin(_id, emailNick, password, gettoken) {
        this._id = _id;
        this.emailNick = emailNick;
        this.password = password;
        this.gettoken = gettoken;
    }
    return UserLogin;
}());

//# sourceMappingURL=userLogin.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeliculasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_login_login__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__perfil_perfil__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inicio_inicio__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__info_info__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_movie_movie_provider__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_movie_movie__ = __webpack_require__(414);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PeliculasPage = (function () {
    function PeliculasPage(navCtrl, loadingCtrl, navParams, alertCtrl, toastCtrl, contenedorFilms, _movieProvider) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.contenedorFilms = contenedorFilms;
        this._movieProvider = _movieProvider;
        this.structure = { lower: 1990, upper: 2018 };
        this.filter = false;
        this.genre = 'Genre: All';
        this.videoLanguage = 'Video Language: All';
        this.subtitleLanguage = 'Subtitle Language: All';
        this.page = 2;
        this.isSearchbarOpened = false;
        this.iconoIOS1 = 'ios-arrow-dropdown';
        this.iconoAndroid1 = 'md-arrow-dropdown';
        this.iconoIOS = 'ios-arrow-dropdown';
        this.iconoAndroid = 'md-arrow-dropdown';
        this.contenedor = navParams.data['data'];
        this.movie = new __WEBPACK_IMPORTED_MODULE_7__providers_movie_movie__["a" /* Movie */]('', '', '', '', '', '', '', '', '', '', '');
    }
    PeliculasPage.prototype.ngOnInit = function () {
        var _this = this;
        this._movieProvider.getAllMovies(localStorage.getItem('token'), this.page).subscribe(function (response) {
            _this.listMovie = [];
            response.message.forEach(function (eleMovie) {
                _this.listMovie.push(eleMovie);
            });
            console.log(_this.listMovie);
        }, function (error) {
            console.log(error);
        });
    };
    PeliculasPage.prototype.goToPerfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__perfil_perfil__["a" /* PerfilPage */], {
            data: this.contenedor
        });
    };
    PeliculasPage.prototype.goToInicio = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__inicio_inicio__["a" /* InicioPage */], {
            data: this.contenedor
        });
    };
    PeliculasPage.prototype.goToInfo = function (p) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__info_info__["a" /* InfoPage */], {
            contenido: p,
            data: this.contenedor
        });
    };
    PeliculasPage.prototype.filterType = function () {
        this.filter = true;
    };
    PeliculasPage.prototype.filterType2 = function () {
        this.filter = false;
    };
    PeliculasPage.prototype.loginLoading = function () {
        this.filter = false;
        var loading = this.loadingCtrl.create({
            content: 'Years between ' + this.structure.lower + ' and ' + this.structure.upper +
                '<br>' + this.genre + '<br>' + this.videoLanguage + '<br>' + this.subtitleLanguage,
            duration: 5000,
            dismissOnPageChange: true
        });
        loading.present();
        setTimeout(function () {
        }, 2000);
    };
    PeliculasPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this._movieProvider.getAllMovies(localStorage.getItem('token'), this.page).subscribe(function (response) {
            _this.listMovie = [];
            response.message.forEach(function (eleMovie) {
                _this.listMovie.push(eleMovie);
            });
            refresher.complete();
        });
    };
    PeliculasPage.prototype.cambiarIconoSeen = function (fab) {
        this.iconoIOS = 'ios-eye-off';
        this.iconoAndroid = 'md-eye-off';
        fab.close();
        this.mensaje = 'This film has been added to "Seen Group"';
        this.presentToast(this.mensaje);
    };
    PeliculasPage.prototype.cambiarIconoLike = function (fab) {
        this.iconoIOS = 'ios-heart';
        this.iconoAndroid = 'md-heart';
        fab.close();
        this.mensaje = 'This film has been added to "Favourite Group"';
        this.presentToast(this.mensaje);
    };
    PeliculasPage.prototype.cambiarIconoRemove = function (fab) {
        this.iconoIOS = 'ios-arrow-dropdown';
        this.iconoAndroid = 'md-arrow-dropdown';
        fab.close();
        this.mensaje = 'This film has been removed of his old group';
        this.presentToast(this.mensaje);
    };
    PeliculasPage.prototype.presentToast = function (mensaje) {
        var toast = this.toastCtrl.create({
            message: mensaje,
            duration: 4000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PeliculasPage.prototype.moreFilms = function () {
        var _this = this;
        this.contador = [];
        this.page = this.page + 1;
        this._movieProvider.getAllMovies(localStorage.getItem('token'), this.page).subscribe(function (response) {
            response.message.forEach(function (eleMovie) {
                _this.listMovie.push(eleMovie);
                _this.contador.push(eleMovie);
            });
        });
        console.log('Array de peliculas: ', this.listMovie.length);
        console.log('Contenido que trae el server: ', this.contador.length);
    };
    PeliculasPage.prototype.alert = function () {
        this.alertCtrl.create({
            title: 'There was a problem!',
            subTitle: 'There are not more films iin our Database',
            buttons: ['OK']
        }).present();
    };
    PeliculasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-peliculas',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\peliculas\peliculas.html"*/'<page-header></page-header>\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n  <ion-card >\n\n    <ion-row>\n\n      <ion-col col-12 class="center">\n\n        <ion-buttons padding-bottom>\n\n          <button ion-button icon-only outline *ngIf="!filter" (click)="filterType()" col-5>\n\n            Show Filters\n\n          </button>\n\n        </ion-buttons>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-card *ngIf="filter">\n\n\n\n      <ion-item>\n\n        <ion-label>Year: </ion-label>\n\n        <ion-range dualKnobs="true" pin="true" min="1900" max="2020" step="5" snaps="true" [(ngModel)]="structure">\n\n          <ion-icon range-left small ios="ios-time" md="md-time"></ion-icon>\n\n          <ion-icon range-right ios="ios-time" md="md-time"></ion-icon>\n\n        </ion-range>\n\n      </ion-item>\n\n      \n\n      <ion-item>\n\n        <ion-label>Films Genre: </ion-label>\n\n        <ion-select [(ngModel)]="genre" interface="popover">\n\n          <ion-option value="Genre: All" selected="true">All</ion-option>\n\n          <ion-option value="Genre: Action and adventure">Action and adventure</ion-option>\n\n          <ion-option value="Genre: Cartoon">Cartoon</ion-option>\n\n          <ion-option value="Genre: Comedy">Comedy</ion-option>\n\n          <ion-option value="Genre: Crime">Crime</ion-option>\n\n          <ion-option value="Genre: Documentary film">Documentary film</ion-option>\n\n          <ion-option value="Genre: Drama">Drama</ion-option>\n\n          <ion-option value="Genre: Fantasy">Fantasy</ion-option>\n\n          <ion-option value="Genre: Mistery">Mistery</ion-option>\n\n          <ion-option value="Genre: Science fiction">Science fiction</ion-option>\n\n          <ion-option value="Genre: Sports">Sports</ion-option>\n\n          <ion-option value="Genre: Terror">Terror</ion-option>\n\n          <ion-option value="Genre: Thriller">Thriller</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      \n\n      <ion-item>\n\n        <ion-label>Video Language: </ion-label>\n\n        <ion-select [(ngModel)]="videoLanguage" interface="popover">\n\n          <ion-option value="Video Language: All" selected="true">All</ion-option>\n\n          <ion-option value="Video Language: English">English</ion-option>\n\n          <ion-option value="Video Language: French">French</ion-option>\n\n          <ion-option value="Video Language: German">German</ion-option>\n\n          <ion-option value="Video Language: Greek">Greek</ion-option>\n\n          <ion-option value="Video Language: Italian">Italian</ion-option>\n\n          <ion-option value="Video Language: Portuguese">Portuguese</ion-option>\n\n          <ion-option value="Video Language: Russian">Russian</ion-option>\n\n          <ion-option value="Video Language: Spanish">Spanish</ion-option>\n\n          <ion-option value="Video Language: Others">Others</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      \n\n      <ion-item>\n\n        <ion-label>Subtitle Language: </ion-label>\n\n        <ion-select [(ngModel)]="subtitleLanguage" interface="popover">\n\n          <ion-option value="Subtitle Language: All" selected="true">All</ion-option>\n\n          <ion-option value="Subtitle Language: English">English</ion-option>\n\n          <ion-option value="Subtitle Language: French">French</ion-option>\n\n          <ion-option value="Subtitle Language: German">German</ion-option>\n\n          <ion-option value="Subtitle Language: Greek">Greek</ion-option>\n\n          <ion-option value="Subtitle Language: Italian">Italian</ion-option>\n\n          <ion-option value="Subtitle Language: Portuguese">Portuguese</ion-option>\n\n          <ion-option value="Subtitle Language: Russian">Russian</ion-option>\n\n          <ion-option value="Subtitle Language: Spanish">Spanish</ion-option>\n\n          <ion-option value="Subtitle Language: Others">Others</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      \n\n      <ion-row>\n\n        <ion-col col-12 class="center">\n\n          <ion-buttons>\n\n            <button ion-button icon-only outline class="center" *ngIf="filter" (click)="loginLoading()" col-5>\n\n              Accept\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-12 class="center">\n\n          <ion-buttons>\n\n            <button ion-button icon-only outline class="center" *ngIf="filter" (click)="filterType2()" col-5>\n\n              Hide Filters\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n    </ion-card>\n\n    <ion-row>\n\n      <ion-col col-12 class="center" padding-bottom>\n\n        <button ion-button outline (click)="moreFilms()" col-auto>More</button>\n\n      </ion-col>\n\n      <ion-col col-6 class="center" *ngFor="let p of listMovie">\n\n        <ion-thumbnail item-start col-12>\n\n          <button (click)="goToInfo(p)" class="fotoPelicula" no-padding>\n\n            <img [src]="p.poster">\n\n          </button>\n\n          <h5 class="center">\n\n            {{ p.title }}\n\n            <ion-fab top right edge col-4 #fab>\n\n              <button ion-fab mini class="background">\n\n                <ion-icon [ios]="iconoIOS1" [md]="iconoAndroid1"></ion-icon>\n\n              </button>\n\n              <ion-fab-list>\n\n                <button ion-fab>\n\n                  <ion-icon ios="ios-eye-off" md="md-eye-off" (click)="cambiarIconoSeen(fab)"></ion-icon>\n\n                </button>\n\n                <button ion-fab>\n\n                  <ion-icon ios="ios-heart" md="md-heart" (click)="cambiarIconoLike(fab)"></ion-icon>\n\n                </button>\n\n              </ion-fab-list>\n\n            </ion-fab>\n\n          </h5>\n\n        </ion-thumbnail>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\peliculas\peliculas.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__providers_login_login__["a" /* LoginProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_login_login__["a" /* LoginProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__providers_movie_movie_provider__["a" /* MovieProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_movie_movie_provider__["a" /* MovieProvider */]) === "function" && _g || Object])
    ], PeliculasPage);
    return PeliculasPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=peliculas.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perfil_perfil__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__peliculas_peliculas__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ver_todo_ver_todo__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_login_login__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__info_info__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var InicioPage = (function () {
    function InicioPage(navCtrl, modalCtrl, navParams, menuCtrl, comprobarLogin, sanitizer) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.comprobarLogin = comprobarLogin;
        this.sanitizer = sanitizer;
        this.cont = 4;
        this.seeAll = false;
        this.isSearchbarOpened = false;
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
    InicioPage.prototype.goToInfo = function (fotoPeli, titulo) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__info_info__["a" /* InfoPage */], {
            foto: fotoPeli,
            nombre: titulo,
            data: this.contenedor
        });
    };
    InicioPage.prototype.listado = function () {
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
    };
    InicioPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.listado();
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            return;
        }
    };
    InicioPage.prototype.goToPerfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__perfil_perfil__["a" /* PerfilPage */], {
            data: this.contenedor
        });
    };
    InicioPage.prototype.goToSeeAll = function (contenido) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__ver_todo_ver_todo__["a" /* VerTodoPage */], {
            tipo: contenido,
            data: this.contenedor
        });
    };
    InicioPage.prototype.goToPeliculas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__peliculas_peliculas__["a" /* PeliculasPage */], {
            data: this.contenedor
        });
    };
    InicioPage.prototype.ionViewDidLoad = function () {
        if (this.cont > 3) {
            this.seeAll = true;
        }
    };
    InicioPage.prototype.ngOnInit = function () {
        this.identity = this.comprobarLogin.getIdentity();
        this.avatarUrl = this.comprobarLogin.getImageAvatar();
        this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.avatarUrl);
    };
    InicioPage.prototype.ngDoCheck = function () {
        this.identity = this.comprobarLogin.getIdentity();
        this.avatarUrl = this.comprobarLogin.getImageAvatar();
        this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.avatarUrl);
    };
    InicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-inicio',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\inicio\inicio.html"*/'<page-header></page-header>\n\n<ion-content>\n\n  <ion-list *ngIf="isSearchbarOpened">\n\n    <button ion-item *ngFor="let item of items" (click)="showDetail(item)">\n\n      {{ item }}\n\n    </button>\n\n  </ion-list>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <h1 class="titulo">\n\n               Welcome, {{ nombreUsuario }}!\n\n            </h1>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-card-header>\n\n\n\n    <ion-card-content>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <h3 class="titulo">Movies seen:</h3>\n\n            <a *ngIf="seeAll" class="alinearDerecha" (click)="goToSeeAll(\'peliculaVista\')">see all</a>\n\n            <ion-grid>\n\n              <ion-row>\n\n                <ion-col col-4>\n\n                  <button (click)="goToInfo(peli1, titulo1)" class="fotoPelicula" no-padding>\n\n                    <ion-thumbnail item-start>\n\n                      <img [src]="peli1">\n\n                    </ion-thumbnail>\n\n                  </button>\n\n                </ion-col>\n\n                <ion-col col-4>\n\n                  <button (click)="goToInfo(peli2, titulo2)" class="fotoPelicula" no-padding>\n\n                    <ion-thumbnail item-start>\n\n                      <img [src]="peli2">\n\n                    </ion-thumbnail>\n\n                  </button>\n\n                </ion-col>\n\n                <ion-col col-4>\n\n                  <button (click)="goToInfo(peli3, titulo3)" class="fotoPelicula" no-padding>\n\n                    <ion-thumbnail item-start>\n\n                      <img [src]="peli3">\n\n                    </ion-thumbnail>\n\n                  </button>\n\n                </ion-col>\n\n              </ion-row>\n\n\n\n              <ion-row>\n\n                <ion-col col-4>\n\n                  <h2 class="center">{{ titulo1 }}</h2>\n\n                </ion-col>\n\n                <ion-col col-4>\n\n                  <h2 class="center">{{ titulo2 }}</h2>\n\n                </ion-col>\n\n                <ion-col col-4>\n\n                  <h2 class="center">{{ titulo3 }}</h2>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n\n\n            <h3 class="titulo2">Series seen:</h3>\n\n            <ion-grid>\n\n              <ion-row>\n\n                <ion-col col-4>\n\n                  <button (click)="goToInfo(serie1, titulo4)" class="fotoPelicula" no-padding>\n\n                    <ion-thumbnail item-start>\n\n                      <img [src]="serie1">\n\n                    </ion-thumbnail>\n\n                  </button>\n\n                </ion-col>\n\n                <ion-col col-4>\n\n                  <button (click)="goToInfo(serie2, titulo5)" class="fotoPelicula" no-padding>\n\n                    <ion-thumbnail item-start>\n\n                      <img [src]="serie2">\n\n                    </ion-thumbnail>\n\n                  </button>\n\n                </ion-col>\n\n              </ion-row>\n\n            \n\n              <ion-row>\n\n                <ion-col col-4>\n\n                  <h2 class="center">{{ titulo4 }}</h2>\n\n                </ion-col>\n\n                <ion-col col-4>\n\n                  <h2 class="center">{{ titulo5 }}</h2>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n\n\n            <h3 class="titulo2">Favourites films and series:</h3>\n\n            <ion-grid>\n\n              <ion-row>\n\n                <ion-col col-4>\n\n                  <button (click)="goToInfo(serie1, titulo4)" class="fotoPelicula" no-padding>\n\n                    <ion-thumbnail item-start>\n\n                      <img [src]="serie1">\n\n                    </ion-thumbnail>\n\n                  </button>\n\n                </ion-col>\n\n                <ion-col col-4>\n\n                  <button (click)="goToInfo(serie2, titulo5)" class="fotoPelicula" no-padding>\n\n                    <ion-thumbnail item-start>\n\n                      <img [src]="serie2">\n\n                    </ion-thumbnail>\n\n                  </button>\n\n                </ion-col>\n\n              </ion-row>\n\n            \n\n              <ion-row>\n\n                <ion-col col-4>\n\n                  <h2 class="center">{{ titulo4 }}</h2>\n\n                </ion-col>\n\n                <ion-col col-4>\n\n                  <h2 class="center">{{ titulo5 }}</h2>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\inicio\inicio.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__providers_login_login__["a" /* LoginProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_login_login__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */]])
    ], InicioPage);
    return InicioPage;
}());

//# sourceMappingURL=inicio.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var config = {
    apiKey: "AIzaSyDk2H5Yzy8mp8Q6OOwDQ8gptAFYYbP7x5Y",
    authDomain: "proyecto-final-cfc6c.firebaseapp.com",
    databaseURL: "https://proyecto-final-cfc6c.firebaseio.com",
    projectId: "proyecto-final-cfc6c",
    storageBucket: "proyecto-final-cfc6c.appspot.com",
    messagingSenderId: "878191344149"
};
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.initializeApp(config);
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\app\app.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_global__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginProvider = (function () {
    function LoginProvider(http) {
        this.http = http;
        console.log('Hello LoginProvider Provider');
        this.url = __WEBPACK_IMPORTED_MODULE_2__global_global__["a" /* GLOBAL */].url;
    }
    LoginProvider.prototype.getUsers = function () {
        return this.http.get(this.url + 'pruebas');
    };
    LoginProvider.prototype.loginUsers = function (login) {
        return this.http.post(this.url + 'login', { 'emailNick': login[0].emailNick, 'password': login[0].password, 'gettoken': login[0].gettoken });
    };
    LoginProvider.prototype.registerUsers = function (register) {
        return this.http.post(this.url + 'register', { 'name': register[0].name, 'surname': register[0].surname, 'nickname': register[0].nickname, 'email': register[0].email, 'password': register[0].password });
    };
    //Saber en todo momento el usuario que tenemos en uso 
    LoginProvider.prototype.getIdentity = function () {
        var identity = JSON.parse(localStorage.getItem('user'));
        if (identity !== 'undefined') {
            this.identity = identity;
        }
        else {
            this.identity = null;
        }
        return this.identity;
    };
    //Rescatar en cualquier momento nuestro token validado para las peticiones
    LoginProvider.prototype.getToken = function () {
        var token = JSON.parse(localStorage.getItem('token'));
        if (token !== 'undefined') {
            this.token = token;
        }
        else {
            this.token = null;
        }
        return this.token;
    };
    //Actualizacion del estado de las estadisticas
    LoginProvider.prototype.getStats = function () {
        var stats = JSON.parse(localStorage.getItem('stats'));
        if (stats !== undefined) {
            this.stats = stats;
        }
        else {
            this.stats = null;
        }
        return stats;
    };
    //Coger los datos del usuario de la API
    LoginProvider.prototype.getCounter = function (token, userId) {
        if (userId === void 0) { userId = null; }
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', token).set('Content-type', 'application/json');
        if (userId != null) {
            return this.http.get(this.url + 'counters/' + userId, { headers: headers });
        }
        else {
            return this.http.get(this.url + 'counters', { headers: headers });
        }
    };
    LoginProvider.prototype.getAvatar = function (token, imageId) {
        console.log(token + '----' + imageId);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', token).set('Content-type', 'application/json');
        return this.http.get(this.url + 'profile-image/' + imageId, { headers: headers, responseType: 'blob' });
    };
    LoginProvider.prototype.getImageAvatar = function () {
        var imagen = localStorage.getItem('avatar');
        if (imagen !== 'undefined') {
            this.imagen = imagen;
        }
        else {
            this.imagen = null;
        }
        return this.imagen;
    };
    LoginProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], LoginProvider);
    return LoginProvider;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__peliculas_peliculas__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inicio_inicio__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mobiscroll_angular__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_login_login__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_user_provider__ = __webpack_require__(415);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var now = new Date();
var PerfilPage = (function () {
    function PerfilPage(navCtrl, navParams, alertCtrl, comprobarLogin, sanitizer, _userProvider, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.comprobarLogin = comprobarLogin;
        this.sanitizer = sanitizer;
        this._userProvider = _userProvider;
        this.camera = camera;
        this.descripcion = false;
        this.contenidoDescripcion = [];
        this.eventDate = [now, new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 2)];
        this.isBusy = 'busy';
        this.eventText = '';
        this.events = [{
                d: new Date(),
                text: 'New chapter of Mr Robot'
            }];
        this.event = false;
        this.isSearchbarOpened = false;
        this.eventSettings = {
            theme: 'material',
            lang: 'en',
            display: 'inline',
            layout: 'liquid',
            view: {
                calendar: { type: 'month' },
                eventList: { type: 'month' }
            }
        };
        this.formSettings = {
            theme: 'ios'
        };
        // this.contenedor = navParams.data['data'];
        // this.nombreUsuario = this.contenedor['nickname'];
        // this.nombre = this.contenedor['name'];
        // this.apellido = this.contenedor['surname'];
        // this.perfilImg = this.contenedor['image'];
    }
    PerfilPage.prototype.ngOnInit = function () {
        this.identity = this.comprobarLogin.getIdentity();
        this.avatarUrl = this.comprobarLogin.getImageAvatar();
        this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.avatarUrl);
        if (!this.identity['image']) {
            this.identity['image'] = "assets/imgs/profileNull.png";
        }
    };
    /*ngDoCheck(){
      this.identity = this.comprobarLogin.getIdentity();
      this.avatarUrl = this.comprobarLogin.getImageAvatar();
      this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.avatarUrl)
    }*/
    PerfilPage.prototype.actionCamera = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            //la imagen va a estar codificada (base64)
            _this.perfilImg = 'data:image/png;base64,' + imageData;
        }, function (err) {
            console.log(err);
        });
    };
    PerfilPage.prototype.accessGallery = function () {
        var _this = this;
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.DATA_URL
        }).then(function (imageData) {
            _this.perfilImg = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            console.log(err);
        });
    };
    PerfilPage.prototype.showMethods = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Choose one method',
            message: "Do you want to choose the photo from your mobile's galery or you prefer take a photo?",
            buttons: [
                {
                    text: 'Galery',
                    handler: function () {
                        _this.accessGallery();
                    }
                },
                {
                    text: 'Take a Photo',
                    handler: function () {
                        _this.actionCamera();
                    }
                }
            ]
        });
        confirm.present();
    };
    PerfilPage.prototype.ionViewDidLoad = function () {
        if (!this.perfilImg) {
            this.perfilImg = "assets/imgs/profileNull.png";
        }
    };
    PerfilPage.prototype.newEvent = function () {
        this.event = true;
    };
    PerfilPage.prototype.addEvent = function () {
        this.events.push({
            start: new Date(this.fecha.element.value),
            text: this.eventText || 'New Event',
        });
        this.eventText = '';
        this.eventCal.instance.setVal(new Date(this.fecha.element.value));
        this.event = false;
    };
    ;
    PerfilPage.prototype.closeEvent = function () {
        this.event = false;
    };
    PerfilPage.prototype.goToPeliculas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__peliculas_peliculas__["a" /* PeliculasPage */], {
            data: this.contenedor
        });
    };
    PerfilPage.prototype.goToInicio = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__inicio_inicio__["a" /* InicioPage */], {
            data: this.contenedor
        });
    };
    PerfilPage.prototype.goToChat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* ChatPage */]);
    };
    PerfilPage.prototype.descriptionType = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.descripcion = true;
                        _this.contenidoDescripcion = [];
                        for (var key in data) {
                            _this.contenidoDescripcion.push(data[key]);
                            //this.nuevoUser = [{description: this.contenidoDescripcion}];
                            //this.updateUser(this.nuevoUser);
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    PerfilPage.prototype.nameType = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.nombre = [];
                        for (var key in data) {
                            _this.nombre.push(data[key]);
                            _this.nuevoUser = [{ name: _this.nombre }];
                            _this.updateUser(_this.nuevoUser);
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    PerfilPage.prototype.userType = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.nombreUsuario = [];
                        for (var key in data) {
                            _this.nombreUsuario.push(data[key]);
                            _this.nuevoUser = [{ nickname: _this.nombreUsuario }];
                            _this.updateUser(_this.nuevoUser);
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    PerfilPage.prototype.updateUser = function (user) {
        console.log(user[0]);
        this._userProvider.updateUser(user[0], localStorage.getItem('token'), this.comprobarLogin.getIdentity()._id)
            .subscribe(function (response) {
            console.log(response);
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('mbscRange'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__mobiscroll_angular__["c" /* MbscRange */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__mobiscroll_angular__["c" /* MbscRange */]) === "function" && _a || Object)
    ], PerfilPage.prototype, "range", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('mbscEventCal'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__mobiscroll_angular__["a" /* MbscEventcalendar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__mobiscroll_angular__["a" /* MbscEventcalendar */]) === "function" && _b || Object)
    ], PerfilPage.prototype, "eventCal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('fecha'),
        __metadata("design:type", Object)
    ], PerfilPage.prototype, "fecha", void 0);
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\perfil\perfil.html"*/'<page-header></page-header>\n\n<ion-content>\n\n  <ion-list *ngIf="isSearchbarOpened">\n\n    <button ion-item *ngFor="let item of items" (click)="showDetail(item)">\n\n      {{ item }}\n\n    </button>\n\n  </ion-list>\n\n\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-12 *ngIf="!trustedUrl">\n\n            <ion-thumbnail item-start>\n\n              <img [src]="identity.image">\n\n              <ion-fab top right col-3 #fab (click)="showMethods()">\n\n                <button ion-fab mini class="background">\n\n                  <ion-icon ios="ios-camera" md="md-camera"></ion-icon>\n\n                </button>\n\n              </ion-fab>\n\n            </ion-thumbnail>\n\n          </ion-col>\n\n          <ion-col col-12 *ngIf="trustedUrl">\n\n            <ion-thumbnail item-start>  \n\n              <img  [src]="trustedUrl">\n\n            </ion-thumbnail>\n\n          </ion-col>\n\n        </ion-row>\n\n        \n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <ion-grid class="center">\n\n              <ion-row>\n\n                <ion-col col-auto>\n\n                  <h2 class="bold">Name: </h2>\n\n                </ion-col>\n\n                <ion-col col-auto>\n\n                  <h2>{{ identity.name }} {{ identity.surname }}</h2>\n\n                </ion-col>\n\n                <ion-col col-auto>\n\n                  <a (click)="nameType()">\n\n                    <ion-icon ios="ios-create" md="md-create"></ion-icon>\n\n                  </a>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <ion-grid class="center">\n\n              <ion-row>\n\n                <ion-col col-auto>\n\n                  <h2 class="bold">Username: </h2>\n\n                </ion-col>\n\n                <ion-col col-auto>\n\n                  <h2>{{ identity.nickname }}</h2>\n\n                </ion-col>\n\n                <ion-col col-auto>\n\n                  <a (click)="userType()">\n\n                    <ion-icon ios="ios-create" md="md-create"></ion-icon>\n\n                  </a>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n          <ion-col col-12 class="center">\n\n            <ion-buttons>\n\n              <button ion-button icon-only clear class="center" *ngIf="!descripcion" (click)="descriptionType()">\n\n                Type your description\n\n              </button>\n\n            </ion-buttons>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row  *ngIf="descripcion">\n\n          <ion-col col-12>\n\n            <ion-grid class="center">\n\n              <ion-row>\n\n                <ion-col col-auto>\n\n                  <h2 class="center">{{ contenidoDescripcion }}</h2>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n      </ion-grid>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <mbsc-eventcalendar [data]="events" [options]="eventSettings" #mbscEventCal="mobiscroll"></mbsc-eventcalendar>\n\n    <ion-row class="center">\n\n      <ion-col col-12 *ngIf="!event">\n\n        <ion-buttons>\n\n          <button ion-button outline (click)="newEvent()">\n\n            New Event\n\n          </button>\n\n        </ion-buttons>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row *ngIf="event" col-12>\n\n      <mbsc-form [options]="formSettings">\n\n        <div class="mbsc-form-group">\n\n          <ion-item>\n\n            <ion-label color="primary">Title of the event</ion-label>\n\n            <ion-input [(ngModel)]="eventText">Title</ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <mbsc-datetime #fecha id="startDate" placeholder="Please select the date...">Date</mbsc-datetime>\n\n            <div [(ngModel)]="eventDate" mbsc-range [mbsc-options]="rangeSettings" #mbscRange="mobiscroll"></div>\n\n          </ion-item>\n\n        </div>\n\n      </mbsc-form>\n\n      <ion-col col-auto offset-2>\n\n        <ion-buttons>\n\n          <button ion-button outline (click)="addEvent()">\n\n            Add Event\n\n          </button>\n\n        </ion-buttons>\n\n      </ion-col>\n\n      <ion-col col-auto>\n\n        <ion-buttons>\n\n          <button ion-button outline (click)="addEvent()">\n\n            Cancel\n\n          </button>\n\n        </ion-buttons>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\perfil\perfil.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_7__providers_login_login__["a" /* LoginProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_user_provider__["a" /* UserProvider */]]
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__providers_login_login__["a" /* LoginProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_login_login__["a" /* LoginProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_9__providers_user_provider__["a" /* UserProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__providers_user_provider__["a" /* UserProvider */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]) === "function" && _j || Object])
    ], PerfilPage);
    return PerfilPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RATING_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_streaming_media__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__perfil_perfil__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inicio_inicio__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__peliculas_peliculas__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__videoplayer_videoplayer__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var noop = function () {
};
var RATING_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* forwardRef */])(function () { return InfoPage; }),
    multi: true
};
var InfoPage = (function () {
    function InfoPage(navCtrl, navParams, streamingMedia) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.streamingMedia = streamingMedia;
        this._max = 10;
        this._readOnly = false;
        this._emptyStarIconName = 'star-outline';
        this._halfStarIconName = 'star-half';
        this._starIconName = 'star';
        this._nullable = false;
        this.onChangeCallback = noop;
        this.movie = navParams.data['contenido'];
        this.contenedor = navParams.data['data'];
    }
    Object.defineProperty(InfoPage.prototype, "max", {
        get: function () {
            return this._max;
        },
        set: function (val) {
            var newValue = this.getNumberPropertyValue(val);
            if (newValue !== this._max) {
                this._max = newValue;
                this.createStarIndexes();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InfoPage.prototype, "readOnly", {
        get: function () {
            return this._readOnly;
        },
        set: function (val) {
            this._readOnly = this.isTrueProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InfoPage.prototype, "emptyStarIconName", {
        get: function () {
            return this._emptyStarIconName;
        },
        set: function (val) {
            this._emptyStarIconName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InfoPage.prototype, "halfStarIconName", {
        get: function () {
            return this._halfStarIconName;
        },
        set: function (val) {
            this._halfStarIconName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InfoPage.prototype, "starIconName", {
        get: function () {
            return this._starIconName;
        },
        set: function (val) {
            this._starIconName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InfoPage.prototype, "nullable", {
        get: function () {
            return this._nullable;
        },
        set: function (val) {
            this._nullable = this.isTrueProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    InfoPage.prototype.ngOnInit = function () {
        // ngFor needs an array
        this.createStarIndexes();
    };
    InfoPage.prototype.createStarIndexes = function () {
        this.starIndexes = Array(this.max).fill(1).map(function (x, i) { return i; });
    };
    InfoPage.prototype.getStarIconName = function (starIndex) {
        if (this.value === undefined) {
            return this.emptyStarIconName;
        }
        if (this.value > starIndex) {
            if (this.value < starIndex + 1) {
                return this.halfStarIconName;
            }
            else {
                return this.starIconName;
            }
        }
        else {
            return this.emptyStarIconName;
        }
    };
    Object.defineProperty(InfoPage.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (value) {
            if (value !== this.innerValue) {
                this.innerValue = value;
                this.onChangeCallback(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    InfoPage.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    InfoPage.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    InfoPage.prototype.registerOnTouched = function (fn) {
    };
    InfoPage.prototype.onKeyDown = function (event) {
        if (/(37|38|39|40)/.test(event.which)) {
            event.preventDefault();
            event.stopPropagation();
            var newValue = this.value + ((event.which == 38 || event.which == 39) ? 1 : -1);
            return this.rate(newValue);
        }
    };
    InfoPage.prototype.rate = function (value) {
        if (this.readOnly || value < 0 || value > this.max) {
            return;
        }
        if (value === this.value && this.nullable) {
            value = null;
        }
        this.value = value;
    };
    InfoPage.prototype.isTrueProperty = function (val) {
        if (typeof val === 'string') {
            val = val.toLowerCase().trim();
            return (val === 'true' || val === 'on');
        }
        return !!val;
    };
    InfoPage.prototype.getNumberPropertyValue = function (val) {
        if (typeof val === 'string') {
            return parseInt(val.trim());
        }
        return val;
    };
    InfoPage.prototype.ionViewDidLoad = function () {
        if (this.movie['genre'] == 'N/A') {
            this.movie['genre'] = 'Not available';
        }
        if (this.movie['year'] == 'N/A') {
            this.movie['year'] = 'Not available';
        }
        if (this.movie['description'] == 'N/A') {
            this.movie['description'] = 'Not available';
        }
    };
    InfoPage.prototype.goToPerfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__perfil_perfil__["a" /* PerfilPage */], {
            data: this.contenedor
        });
    };
    InfoPage.prototype.goToInicio = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__inicio_inicio__["a" /* InicioPage */], {
            data: this.contenedor
        });
    };
    InfoPage.prototype.goToPeliculas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__peliculas_peliculas__["a" /* PeliculasPage */], {
            data: this.contenedor
        });
    };
    InfoPage.prototype.gotoreproductor = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__videoplayer_videoplayer__["a" /* VideoplayerPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], InfoPage.prototype, "max", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], InfoPage.prototype, "readOnly", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], InfoPage.prototype, "emptyStarIconName", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], InfoPage.prototype, "halfStarIconName", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], InfoPage.prototype, "starIconName", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], InfoPage.prototype, "nullable", null);
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-info',
            styles: ["\n    ul.rating li {\n      display: inline;\n      border: 0px;\n      background: none;\n      padding: 5px 1px;\n    }\n    ul.rating li i {\n      font-size: 30px;\n    }\n  "],template:/*ion-inline-start:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\info\info.html"*/'<page-header></page-header>\n\n<ion-content>\n\n  <ion-card>\n\n    <ion-card-content class="backgroundCard">\n\n      <ion-row class="center">\n\n        <ion-col col-8 offset-2>\n\n          <img [src]="movie.poster">\n\n        </ion-col>\n\n        <ion-col col-6 offset-3 style="text-align: center;">\n\n          <h1>{{ movie.title }}</h1>\n\n        </ion-col>\n\n        <ion-col col-10>\n\n          <ul class="rating" (keydown)="onKeyDown($event)">\n\n            <li *ngFor="let starIndex of starIndexes" tappable (click)="rate(starIndex + 1)">\n\n              <ion-icon [name]="getStarIconName(starIndex)">\n\n              </ion-icon>\n\n            </li>\n\n          </ul>\n\n        </ion-col>\n\n        <ion-col col-6 offset-3>\n\n          <ion-buttons>\n\n            <button ion-button icon-only outline col-12 class="center" (click)="gotoreproductor()">\n\n              Watch Trailer\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-col>\n\n        <ion-col col-6 style="text-align: center;">\n\n          <ion-label class="titulo">GENRE: </ion-label>\n\n          <h3>{{ movie.genre }}</h3>\n\n        </ion-col>\n\n        <ion-col col-6 style="text-align: center;">\n\n          <ion-label class="titulo">YEAR: </ion-label>\n\n          <h3>{{ movie.year }}</h3>\n\n        </ion-col>\n\n        <ion-col col-12 style="text-align: center;">\n\n          <ion-label class="titulo">DESCRIPTION: </ion-label>\n\n          <h3>{{ movie.description }}</h3>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\info\info.html"*/,
            providers: [RATING_CONTROL_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_streaming_media__["a" /* StreamingMedia */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_streaming_media__["a" /* StreamingMedia */]) === "function" && _c || Object])
    ], InfoPage);
    return InfoPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoplayerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VideoplayerPage = (function () {
    function VideoplayerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.status = 'play';
        this.icono = 'ios-play-outline';
    }
    VideoplayerPage.prototype.ionViewDidLoad = function () {
    };
    VideoplayerPage.prototype.toggleVideo = function (event) {
        if (this.status == 'play') {
            this.videoplayer.nativeElement.play();
            /*if (this.videoplayer.nativeElement.requestFullscreen) {
              this.videoplayer.nativeElement.requestFullscreen();
            }
            else if (this.videoplayer.nativeElement.mozRequestFullScreen) {
              this.videoplayer.nativeElement.nativeElement.mozRequestFullScreen();
            }
            else if (this.videoplayer.nativeElement.webkitRequestFullScreen) {
              this.videoplayer.nativeElement.webkitRequestFullScreen();
            }*/
            this.status = 'pause';
            this.icono = 'ios-pause-outline';
        }
        else {
            this.videoplayer.nativeElement.pause();
            this.status = 'play';
            this.icono = 'ios-play-outline';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('videoplayer'),
        __metadata("design:type", Object)
    ], VideoplayerPage.prototype, "videoplayer", void 0);
    VideoplayerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-videoplayer',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\videoplayer\videoplayer.html"*/'<ion-content >\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <video #videoplayer id="videoplayer">\n\n            <source src="assets/videos/rain.mp4" type="video/mp4">\n\n          </video>\n\n          <button id="myBtn" (click)="toggleVideo()"><ion-icon [name]="icono"></ion-icon></button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\videoplayer\videoplayer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], VideoplayerPage);
    return VideoplayerPage;
}());

//# sourceMappingURL=videoplayer.js.map

/***/ })

},[374]);
//# sourceMappingURL=main.js.map