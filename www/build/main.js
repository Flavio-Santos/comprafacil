webpackJsonp([2],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__ = __webpack_require__(165);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__ = __webpack_require__(164);
>>>>>>> 34d26153715273aa102ff78c663be8172b60b7b7
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
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
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = (function () {
    function ChatPage(navCtrl, navParams, socket, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.socket = socket;
        this.toastCtrl = toastCtrl;
        this.messages = [];
        this.nickname = '';
        this.message = '';
        this.nickname = 'tester' + Math.random();
        this.socket.connect();
        this.socket.emit('set-nickname', this.nickname);
        this.getMessages().subscribe(function (message) {
            _this.messages.push(message);
        });
        this.getUsers().subscribe(function (data) {
            var user = data['user'];
            if (data['event'] === 'left') {
                _this.showToast('usuario entrou: ' + user);
            }
            else {
                _this.showToast('usuario saiu: ' + user);
            }
        });
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatPage');
    };
    ChatPage.prototype.sendMessage = function () {
        this.socket.emit('add-message', { text: this.message });
        this.message = '';
    };
    ChatPage.prototype.getMessages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
        });
        return observable;
    };
    ChatPage.prototype.getUsers = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('users-changed', function (data) {
                observer.next(data);
            });
        });
        return observable;
    };
    ChatPage.prototype.ionViewWillLeave = function () {
        this.socket.disconnect();
    };
    ChatPage.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    return ChatPage;
}());
ChatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
<<<<<<< HEAD
        selector: 'page-chat',template:/*ion-inline-start:"/Users/bruno/Documents/IFTM/comprafacil-app/src/pages/chat/chat.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Chat\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row *ngFor="let message of messages">\n\n      <ion-col col-9 *ngIf="message.from !== nickname" class="message" [ngClass]="{\'my_message\': message.from === nickname, \'other_message\': message.from !== nickname}">\n        <span class="user_name">{{ message.from }}:</span><br>\n        <span>{{ message.text }}</span>\n        <div class="time">{{message.created | date:\'dd.MM hh:MM\'}}</div>\n      </ion-col>\n\n      <ion-col offset-3 col-9 *ngIf="message.from === nickname" class="message" [ngClass]="{\'my_message\': message.from === nickname, \'other_message\': message.from !== nickname}">\n        <span class="user_name">{{ message.from }}:</span><br>\n        <span>{{ message.text }}</span>\n        <div class="time">{{message.created | date:\'dd.MM hh:MM\'}}</div>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-row class="message_row">\n      <ion-col col-9>\n        <ion-item no-lines>\n          <ion-input type="text" placeholder="Mensagem" [(ngModel)]="message"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-3>\n        <button ion-button clear color="primary" (click)="sendMessage()" [disabled]="message === \'\'">\n          Enviar\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/bruno/Documents/IFTM/comprafacil-app/src/pages/chat/chat.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__["Socket"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__["Socket"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]) === "function" && _d || Object])
=======
        selector: 'page-chat',template:/*ion-inline-start:"D:\01 IFTM\4semestre\PI IV\comprafacil\src\pages\chat\chat.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Chat\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row *ngFor="let message of messages">\n\n\n\n      <ion-col col-9 *ngIf="message.from !== nickname" class="message" [ngClass]="{\'my_message\': message.from === nickname, \'other_message\': message.from !== nickname}">\n\n        <span class="user_name">{{ message.from }}:</span><br>\n\n        <span>{{ message.text }}</span>\n\n        <div class="time">{{message.created | date:\'dd.MM hh:MM\'}}</div>\n\n      </ion-col>\n\n\n\n      <ion-col offset-3 col-9 *ngIf="message.from === nickname" class="message" [ngClass]="{\'my_message\': message.from === nickname, \'other_message\': message.from !== nickname}">\n\n        <span class="user_name">{{ message.from }}:</span><br>\n\n        <span>{{ message.text }}</span>\n\n        <div class="time">{{message.created | date:\'dd.MM hh:MM\'}}</div>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-row class="message_row">\n\n      <ion-col col-9>\n\n        <ion-item no-lines>\n\n          <ion-input type="text" placeholder="Message" [(ngModel)]="message"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-3>\n\n        <button ion-button clear color="primary" (click)="sendMessage()" [disabled]="message === \'\'">\n\n          Send\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\01 IFTM\4semestre\PI IV\comprafacil\src\pages\chat\chat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__["Socket"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
>>>>>>> 34d26153715273aa102ff78c663be8172b60b7b7
], ChatPage);

var _a, _b, _c, _d;
//# sourceMappingURL=chat.js.map

/***/ }),

<<<<<<< HEAD
/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MappagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MappagePage = (function () {
    function MappagePage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        setTimeout(function () {
            _this.loadMap();
            document.getElementById('search').style.display = 'block';
        }, 2000);
    }
    MappagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MappagePage');
    };
    MappagePage.prototype.loadMap = function () {
        var latLng = new google.maps.LatLng(-18.9364604, -48.2841558);
        var latLngMarker = new google.maps.LatLng(-18.9364604, -48.2841558);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.marker = new google.maps.Marker({
            position: latLngMarker,
            map: this.map,
            title: 'Hello World!'
        });
    };
    return MappagePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], MappagePage.prototype, "mapElement", void 0);
MappagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-mappage',template:/*ion-inline-start:"/Users/bruno/Documents/IFTM/comprafacil-app/src/pages/mappage/mappage.html"*/'<!--\n  Generated template for the MappagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Escolha um local para encontrar</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding>\n  <div id="search" style="background:whitesmoke; width:90%; height:50px; border-radius:10px; position:absolute; z-index:9999; top:70px; left:5%; display:none; box-shadow: 1px 2px 3px grey; padding:3px; -webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;">\n    <p style="color:darkgrey; font-size:15px;">Escolha um lugar para negociar...</p>\n  </div>\n  <div #map id="map" style="width:100%; height:100%" (click)="loadMap()">\n    <img style="display:block; margin:auto;" src="https://m.popkey.co/163fce/Llgbv_s-200x150.gif" alt="">\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/bruno/Documents/IFTM/comprafacil-app/src/pages/mappage/mappage.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _c || Object])
], MappagePage);

var _a, _b, _c;
//# sourceMappingURL=mappage.js.map

/***/ }),

/***/ 123:
=======
/***/ 122:
>>>>>>> 34d26153715273aa102ff78c663be8172b60b7b7
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
<<<<<<< HEAD
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 164:
=======
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 163:
>>>>>>> 34d26153715273aa102ff78c663be8172b60b7b7
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chat/chat.module": [
		321,
<<<<<<< HEAD
		1
	],
	"../pages/mappage/mappage.module": [
		322,
=======
>>>>>>> 34d26153715273aa102ff78c663be8172b60b7b7
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
<<<<<<< HEAD
webpackAsyncContext.id = 164;
=======
webpackAsyncContext.id = 163;
>>>>>>> 34d26153715273aa102ff78c663be8172b60b7b7
module.exports = webpackAsyncContext;

/***/ }),

<<<<<<< HEAD
/***/ 222:
=======
/***/ 221:
>>>>>>> 34d26153715273aa102ff78c663be8172b60b7b7
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(111);
<<<<<<< HEAD
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cadastrar_cadastrar__ = __webpack_require__(222);
>>>>>>> 34d26153715273aa102ff78c663be8172b60b7b7
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



<<<<<<< HEAD
=======

>>>>>>> 34d26153715273aa102ff78c663be8172b60b7b7
var HomePage = (function () {
    function HomePage(navCtrl, fb) {
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.pageData = { title: 'Login' };
    }
    HomePage.prototype.doLogin = function () {
        this.fb.login(['public_profile', 'email'])
            .then(function (res) { return alert('Logged into Facebook!'); })
            .catch(function (e) { return alert('Error logging into Facebook'); });
    };
<<<<<<< HEAD
=======
    HomePage.prototype.cadastro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cadastrar_cadastrar__["a" /* CadastrarPage */]);
    };
>>>>>>> 34d26153715273aa102ff78c663be8172b60b7b7
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], HomePage.prototype, "nav", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
<<<<<<< HEAD
        selector: 'page-home',template:/*ion-inline-start:"/Users/bruno/Documents/IFTM/comprafacil-app/src/pages/home/home.html"*/'<ion-header class="orange-default">\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{pageData.title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class="list-logins">\n    <button ion-item no-padding class="login" (click)="doLogin()">\n      <span class="internal-login-handler">\n        <img src="assets/facebook.png">\n        Login com facebook\n      </span>\n    </button>\n    <button ion-item no-padding class="login">\n      <span class="internal-login-handler">\n        <img src="assets/googlemais.png">\n        Login com gmail\n      </span>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/bruno/Documents/IFTM/comprafacil-app/src/pages/home/home.html"*/
=======
        selector: 'page-home',template:/*ion-inline-start:"D:\01 IFTM\4semestre\PI IV\comprafacil\src\pages\home\home.html"*/'<ion-header class="orange-default">\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{pageData.title}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list class="list-logins">\n\n    <button ion-item no-padding class="login" (click)="doLogin()">\n\n      <span class="internal-login-handler">\n\n        <img src="assets/facebook.png">\n\n        Login com facebook\n\n      </span>\n\n    </button>\n\n    <button ion-item no-padding class="login">\n\n      <span class="internal-login-handler">\n\n        <img src="assets/googlemais.png">\n\n        Login com gmail\n\n      </span>\n\n    </button>\n\n    <ion-item>\n\n        <button ion-button (click)="cadastro()">Cadastrar</button>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01 IFTM\4semestre\PI IV\comprafacil\src\pages\home\home.html"*/
>>>>>>> 34d26153715273aa102ff78c663be8172b60b7b7
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

<<<<<<< HEAD
=======
/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
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
 * Generated class for the CadastrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastrarPage = (function () {
    function CadastrarPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CadastrarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastrarPage');
    };
    CadastrarPage.prototype.enviar = function () {
        console.log(this.user.email);
    };
    return CadastrarPage;
}());
CadastrarPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-cadastrar',template:/*ion-inline-start:"D:\01 IFTM\4semestre\PI IV\comprafacil\src\pages\cadastrar\cadastrar.html"*/'<!--\n  Generated template for the CadastrarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>cadastrar</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="enviar()">\n  <ion-list>\n    <ion-item>\n      <ion-label color="primary" floating>Email</ion-label>\n      <ion-input [(ngModel)]="user.email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="primary" floating>Senha</ion-label>\n      <ion-input [(ngModel)]="user.senha"></ion-input>\n    </ion-item>\n    <ion-item>\n        <button ion-button type="submit">Cadastrar</button>\n    </ion-item>\n  </ion-list>\n</form>\n</ion-content>\n'/*ion-inline-end:"D:\01 IFTM\4semestre\PI IV\comprafacil\src\pages\cadastrar\cadastrar.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], CadastrarPage);

//# sourceMappingURL=cadastrar.js.map

/***/ }),

>>>>>>> 34d26153715273aa102ff78c663be8172b60b7b7
/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        this.items = [];
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
<<<<<<< HEAD
        selector: 'page-list',template:/*ion-inline-start:"/Users/bruno/Documents/IFTM/comprafacil-app/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/bruno/Documents/IFTM/comprafacil-app/src/pages/list/list.html"*/
=======
        selector: 'page-list',template:/*ion-inline-start:"D:\01 IFTM\4semestre\PI IV\comprafacil\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01 IFTM\4semestre\PI IV\comprafacil\src\pages\list\list.html"*/
>>>>>>> 34d26153715273aa102ff78c663be8172b60b7b7
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_all_products_all_products__ = __webpack_require__(225);
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
 * Generated class for the ProductlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductlistPage = (function () {
    function ProductlistPage(navCtrl, navParams, allProducts) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.allProducts = allProducts;
    }
    ProductlistPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ProductlistPage');
        this.allProducts.consultaServidor().subscribe(function (data) {
            _this.products = data;
            console.log("retorno: ", data);
        }, function (err) {
            console.log("Erro: ", err);
        }, function () { return console.log('consulta completa'); });
    };
    return ProductlistPage;
}());
ProductlistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
<<<<<<< HEAD
        selector: 'page-productlist',template:/*ion-inline-start:"/Users/bruno/Documents/IFTM/comprafacil-app/src/pages/productlist/productlist.html"*/'<!--\n  Generated template for the ProductlistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="orange-default">\n\n  <ion-navbar>\n    <ion-title>Produtos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-item  *ngFor="let product of products" (click)="itemTapped($event, item)">\n    {{product.nome}}\n    <div class="item-note" item-end>\n      \n    </div>\n  </button>\n  <button ion-button (click)="searchForMovie()"></button>\n</ion-content>\n'/*ion-inline-end:"/Users/bruno/Documents/IFTM/comprafacil-app/src/pages/productlist/productlist.html"*/,
=======
        selector: 'page-productlist',template:/*ion-inline-start:"D:\01 IFTM\4semestre\PI IV\comprafacil\src\pages\productlist\productlist.html"*/'<!--\n\n  Generated template for the ProductlistPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header class="orange-default">\n\n\n\n  <ion-navbar>\n\n    <ion-title>Produtos</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<!--*ngFor="let product of products"-->\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row >\n\n      <ion-col col-4 class="img">\n\n          <img src="https://fichatecnica.motosblog.com.br/fotos/cache_30bf74d4f35848c20bd64079c5978792_907.jpg" alt="">\n\n      </ion-col>\n\n      <ion-col col-5 class="dados">\n\n        <p><b> Moto 150</b></p>\n\n        <p>Lorem ips ipsam neque porro nam illo repudiandae!</p>\n\n      </ion-col>\n\n      <ion-col col-3 class="preco">\n\n          RS123\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01 IFTM\4semestre\PI IV\comprafacil\src\pages\productlist\productlist.html"*/,
>>>>>>> 34d26153715273aa102ff78c663be8172b60b7b7
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_all_products_all_products__["a" /* AllProductsProvider */]])
], ProductlistPage);

//# sourceMappingURL=productlist.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllProductsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the AllProductsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AllProductsProvider = (function () {
    function AllProductsProvider(http, _platform) {
        this.http = http;
        this._platform = _platform;
        this.url = "/cloudfoundry";
        if (this._platform.is("cordova")) {
            this.url = "http://localhost:8080";
        }
    }
    AllProductsProvider.prototype.postProduto = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]('Content-Type:application/json; charset=UTF-8');
        var myData = JSON.stringify({ nome: data.nome });
        return this.http.post(this.url + '/produtos', myData, { headers: headers });
    };
    AllProductsProvider.prototype.consultaServidor = function () {
        return this.http.get(this.url + '/categorias');
    };
    return AllProductsProvider;
}());
AllProductsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* Platform */]])
], AllProductsProvider);

//# sourceMappingURL=all-products.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(243);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(311);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_productlist_productlist__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_all_products_all_products__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_chat_chat__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_mappage_mappage__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng_socket_io__ = __webpack_require__(165);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_cadastrar_cadastrar__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_productlist_productlist__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_all_products_all_products__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_chat_chat__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng_socket_io__ = __webpack_require__(164);
>>>>>>> 34d26153715273aa102ff78c663be8172b60b7b7
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_facebook__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















//colocar ali em cima se der pau FacebookLoginResponse
var config = { url: 'http://10.10.20.138:3001', options: {} };
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
<<<<<<< HEAD
            __WEBPACK_IMPORTED_MODULE_8__pages_productlist_productlist__["a" /* ProductlistPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_mappage_mappage__["a" /* MappagePage */]
=======
            __WEBPACK_IMPORTED_MODULE_9__pages_productlist_productlist__["a" /* ProductlistPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_cadastrar_cadastrar__["a" /* CadastrarPage */]
>>>>>>> 34d26153715273aa102ff78c663be8172b60b7b7
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mappage/mappage.module#MappagePageModule', name: 'MappagePage', segment: 'mappage', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_14_ng_socket_io__["SocketIoModule"].forRoot(config)
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
<<<<<<< HEAD
            __WEBPACK_IMPORTED_MODULE_8__pages_productlist_productlist__["a" /* ProductlistPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_mappage_mappage__["a" /* MappagePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_facebook__["a" /* Facebook */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_11__providers_all_products_all_products__["a" /* AllProductsProvider */]
=======
            __WEBPACK_IMPORTED_MODULE_9__pages_productlist_productlist__["a" /* ProductlistPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_cadastrar_cadastrar__["a" /* CadastrarPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_facebook__["a" /* Facebook */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_12__providers_all_products_all_products__["a" /* AllProductsProvider */]
>>>>>>> 34d26153715273aa102ff78c663be8172b60b7b7
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_productlist_productlist__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_chat_chat__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_mappage_mappage__ = __webpack_require__(113);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_productlist_productlist__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_chat_chat__ = __webpack_require__(112);
>>>>>>> 34d26153715273aa102ff78c663be8172b60b7b7
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, fb) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.fb = fb;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'Busca de produtos', component: __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */] },
            { title: 'Produtos', component: __WEBPACK_IMPORTED_MODULE_7__pages_productlist_productlist__["a" /* ProductlistPage */] },
            { title: 'Chat', component: __WEBPACK_IMPORTED_MODULE_8__pages_chat_chat__["a" /* ChatPage */] },
            { title: 'Maps', component: __WEBPACK_IMPORTED_MODULE_9__pages_mappage_mappage__["a" /* MappagePage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.backgroundColorByHexString('#D07400');
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.push(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
<<<<<<< HEAD
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]) === "function" && _a || Object)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/bruno/Documents/IFTM/comprafacil-app/src/app/app.html"*/'<ion-menu [content]="content" class="back">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n        <img src="assets/logo.png" alt="">\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class="orange-default">\n    <ion-list class="menu">\n      <button menuClose ion-item no-lines no-padding class="menu-item" *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/bruno/Documents/IFTM/comprafacil-app/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */]) === "function" && _e || Object])
=======
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\01 IFTM\4semestre\PI IV\comprafacil\src\app\app.html"*/'<ion-menu [content]="content" class="back">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>\n\n        <img src="assets/logo.png" alt="">\n\n      </ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content class="orange-default">\n\n    <ion-list class="menu">\n\n      <button menuClose ion-item no-lines no-padding class="menu-item" *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"D:\01 IFTM\4semestre\PI IV\comprafacil\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */]])
>>>>>>> 34d26153715273aa102ff78c663be8172b60b7b7
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[226]);
//# sourceMappingURL=main.js.map