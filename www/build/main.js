webpackJsonp([4],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__ = __webpack_require__(170);
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
        selector: 'page-chat',template:/*ion-inline-start:"/Users/bruno/Documents/IFTM/Projeto Integrador/code/comprafacil-front-end/src/pages/chat/chat.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Chat\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row *ngFor="let message of messages">\n\n      <ion-col col-9 *ngIf="message.from !== nickname" class="message" [ngClass]="{\'my_message\': message.from === nickname, \'other_message\': message.from !== nickname}">\n        <span class="user_name">{{ message.from }}:</span><br>\n        <span>{{ message.text }}</span>\n        <div class="time">{{message.created | date:\'dd.MM hh:MM\'}}</div>\n      </ion-col>\n\n      <ion-col offset-3 col-9 *ngIf="message.from === nickname" class="message" [ngClass]="{\'my_message\': message.from === nickname, \'other_message\': message.from !== nickname}">\n        <span class="user_name">{{ message.from }}:</span><br>\n        <span>{{ message.text }}</span>\n        <div class="time">{{message.created | date:\'dd.MM hh:MM\'}}</div>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-row class="message_row">\n      <ion-col col-9>\n        <ion-item no-lines>\n          <ion-input type="text" placeholder="Mensagem" [(ngModel)]="message"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-3>\n        <button ion-button clear color="primary" (click)="sendMessage()" [disabled]="message === \'\'">\n          Enviar\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/bruno/Documents/IFTM/Projeto Integrador/code/comprafacil-front-end/src/pages/chat/chat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__["Socket"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
], ChatPage);

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MappagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], MappagePage.prototype, "mapElement", void 0);
MappagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-mappage',template:/*ion-inline-start:"/Users/bruno/Documents/IFTM/Projeto Integrador/code/comprafacil-front-end/src/pages/mappage/mappage.html"*/'<!--\n  Generated template for the MappagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Escolha um local para encontrar</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding>\n  <div id="search" style="background:whitesmoke; width:90%; height:50px; border-radius:10px; position:absolute; z-index:9999; top:70px; left:5%; display:none; box-shadow: 1px 2px 3px grey; padding:3px; -webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;">\n    <p style="color:darkgrey; font-size:15px;">Escolha um lugar para negociar...</p>\n  </div>\n  <div #map id="map" style="width:100%; height:100%" (click)="loadMap()">\n    <img style="display:block; margin:auto;" src="https://m.popkey.co/163fce/Llgbv_s-200x150.gif" alt="">\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/bruno/Documents/IFTM/Projeto Integrador/code/comprafacil-front-end/src/pages/mappage/mappage.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], MappagePage);

//# sourceMappingURL=mappage.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeusAnunciosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vender_vender__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__productlist_productlist__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_meus_anuncios_meus_anuncios__ = __webpack_require__(90);
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
 * Generated class for the MeusAnunciosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MeusAnunciosPage = (function () {
    function MeusAnunciosPage(navCtrl, navParams, meusAnunciosProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.meusAnunciosProvider = meusAnunciosProvider;
        this.title = "Meus Anuncios";
        this.anuncios = [];
        this.getAnuncios();
    }
    MeusAnunciosPage.prototype.getAnuncios = function () {
        var _this = this;
        this.meusAnunciosProvider.getHistorico().subscribe(function (data) {
            _this.anuncios = data;
            console.log("retorno anuncios: ", _this.anuncios);
        }, function (err) {
            console.log("Erro: ", err);
        }, function () { return console.log('consulta completa'); });
    };
    MeusAnunciosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MeusAnunciosPage');
    };
    MeusAnunciosPage.prototype.anunciar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__vender_vender__["a" /* VenderPage */]);
    };
    MeusAnunciosPage.prototype.verAnuncios = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__productlist_productlist__["a" /* ProductlistPage */]);
    };
    return MeusAnunciosPage;
}());
MeusAnunciosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-meus-anuncios',template:/*ion-inline-start:"/Users/bruno/Documents/IFTM/Projeto Integrador/code/comprafacil-front-end/src/pages/meus-anuncios/meus-anuncios.html"*/'<!--\n  Generated template for the MeusAnunciosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ title }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-list *ngIf="anuncios.length > 0">\n    <ion-item>\n      <button ion-button col-5 offset-7 (click)="anunciar()">Quero Vender!</button>\n    </ion-item>\n  </ion-list>\n\n  <ion-grid *ngIf="anuncios.length > 0">\n    <ion-row *ngFor="let product of anuncios">\n      <ion-col col-4 class="img">\n        <img *ngIf="!!product.imagens[0]" [src]="product.imagens[0]" alt="">\n        <img *ngIf="!product.imagens[0]" src="https://www.materialui.co/materialIcons/image/camera_alt_grey_192x192.png" alt="">\n      </ion-col>\n      <ion-col col-5 class="dados">\n        <p><b> {{product.nome}}</b></p>\n        <p>{{product.descricao}}</p>\n      </ion-col>\n      <ion-col col-3 class="preco">\n        {{product.valor}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-row *ngIf="anuncios.length <= 0">\n    <ion-col col-12 text-center>\n      Voce ainda nao anunciou nada!\n    </ion-col>\n\n    <ion-col col-12 text-center></ion-col>\n\n    <ion-col col-12>\n      <button ion-button col-5 (click)="verAnuncios()">Anuncios</button>\n      <ion-col col-2 text-center>OU</ion-col>\n      <button ion-button col-5 (click)="anunciar()">Quero Vender!</button>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/Users/bruno/Documents/IFTM/Projeto Integrador/code/comprafacil-front-end/src/pages/meus-anuncios/meus-anuncios.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_meus_anuncios_meus_anuncios__["a" /* MeusAnunciosProvider */]])
], MeusAnunciosPage);

//# sourceMappingURL=meus-anuncios.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VenderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_meus_anuncios_meus_anuncios__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__productlist_productlist__ = __webpack_require__(46);
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
 * Generated class for the VenderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VenderPage = (function () {
    function VenderPage(navCtrl, navParams, http, anunciosProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.anunciosProvider = anunciosProvider;
        this.alertCtrl = alertCtrl;
        this.title = "Quero vender!";
        this.url = "http://localhost:8080";
        this.produto = {
            valor: 0.0,
            titulo: '',
            categoria: {
                id: null
            },
            localizacao: null,
            descricao: '',
            vendedor: {
                id: 2
            }
        };
        this.produtoPostar = {
            valor: 0.0,
            nome: '',
            categoria: {
                id: null
            },
            localizacao: null,
            descricao: '',
            vendedor: {
                id: 2
            }
        };
        this.getCategorias();
    }
    VenderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VenderPage');
    };
    VenderPage.prototype.storeAnuncio = function (produto) {
        var _this = this;
        console.log(produto);
        this.produtoPostar = {
            valor: produto.valor,
            nome: produto.nome,
            categoria: {
                id: produto.categoria
            },
            localizacao: {
                id: 1
            },
            descricao: produto.descricao,
            vendedor: {
                id: 2
            }
        };
        this.anunciosProvider.storeAnuncio(this.produtoPostar).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            if (err.status == 201) {
                var alert = _this.alertCtrl.create({
                    title: 'Sucesso!',
                    subTitle: 'Produto cadastrado com sucesso!',
                    buttons: ['Ok']
                });
                alert.present();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__productlist_productlist__["a" /* ProductlistPage */]);
            }
        }, function () { return console.log('consulta de gravacao de produto completa'); });
    };
    VenderPage.prototype.getCategorias = function () {
        var _this = this;
        this.anunciosProvider.getCategorias().subscribe(function (data) {
            console.log(data);
            _this.categorias = data;
        }, function (err) {
            console.log("Erro: ", err);
        }, function () { return console.log('consulta completa'); });
    };
    return VenderPage;
}());
VenderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-vender',template:/*ion-inline-start:"/Users/bruno/Documents/IFTM/Projeto Integrador/code/comprafacil-front-end/src/pages/vender/vender.html"*/'<!--\n  Generated template for the VenderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-item>\n    <ion-label>Titulo</ion-label>\n    <ion-input type="text" [(ngModel)]="produto.nome" name="titulo"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Valor</ion-label>\n    <ion-input type="text" [(ngModel)]="produto.valor" name="valor"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Descricao</ion-label>\n    <ion-input type="text" [(ngModel)]="produto.descricao" name="descricao"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Telefone</ion-label>\n    <ion-input type="text" [(ngModel)]="produto.telefone" name="telefone"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Categoria</ion-label>\n    <ion-select [(ngModel)]="produto.categoria">\n      <ion-option *ngFor="let categoria of categorias" [value]="categoria.id">{{categoria.nome}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item text-center>\n    <button ion-button (click)="storeAnuncio(produto)">Cadastrar</button>\n  </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/Users/bruno/Documents/IFTM/Projeto Integrador/code/comprafacil-front-end/src/pages/vender/vender.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_meus_anuncios_meus_anuncios__["a" /* MeusAnunciosProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_meus_anuncios_meus_anuncios__["a" /* MeusAnunciosProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object])
], VenderPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=vender.js.map

/***/ }),

/***/ 129:
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
webpackEmptyAsyncContext.id = 129;

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chat/chat.module": [
		326,
		3
	],
	"../pages/mappage/mappage.module": [
		327,
		2
	],
	"../pages/meus-anuncios/meus-anuncios.module": [
		328,
		1
	],
	"../pages/vender/vender.module": [
		329,
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
webpackAsyncContext.id = 169;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllProductsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { Platform } from 'ionic-angular';




/*
  Generated class for the AllProductsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AllProductsProvider = (function () {
    function AllProductsProvider(http) {
        this.http = http;
        this.url = "http://localhost:8080";
        /*if (this._platform.is("cordova")) {
          this.url = "http://10.10.21.3:8080";
        }*/
    }
    AllProductsProvider.prototype.postProduto = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]('Content-Type:application/json; charset=UTF-8');
        var myData = JSON.stringify({ email: data.email, senha: data.senha });
        return this.http.post(this.url + '/login', myData, { headers: headers });
    };
    AllProductsProvider.prototype.consultaServidor = function () {
        return this.http.get(this.url + '/anuncios');
    };
    AllProductsProvider.prototype.getCategorias = function () {
        return this.http.get(this.url + '/categorias');
    };
    return AllProductsProvider;
}());
AllProductsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
], AllProductsProvider);

//# sourceMappingURL=all-products.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cadastrar_cadastrar__ = __webpack_require__(229);
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
    HomePage.prototype.cadastro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cadastrar_cadastrar__["a" /* CadastrarPage */]);
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], HomePage.prototype, "nav", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/bruno/Documents/IFTM/Projeto Integrador/code/comprafacil-front-end/src/pages/home/home.html"*/'<ion-header class="orange-default">\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{pageData.title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class="list-logins">\n    <button ion-item no-padding class="login" (click)="doLogin()">\n      <span class="internal-login-handler">\n        <img src="assets/facebook.png">\n        Login com facebook\n      </span>\n    </button>\n    <button ion-item no-padding class="login">\n      <span class="internal-login-handler">\n        <img src="assets/googlemais.png">\n        Login com gmail\n      </span>\n    </button>\n    <ion-item>\n        <button ion-button (click)="cadastro()">Cadastrar</button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/bruno/Documents/IFTM/Projeto Integrador/code/comprafacil-front-end/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__productlist_productlist__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(230);
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
    function CadastrarPage(navCtrl, navParams, userProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.alertCtrl = alertCtrl;
        this.user = {};
    }
    CadastrarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastrarPage');
    };
    CadastrarPage.prototype.enviar = function () {
        var _this = this;
        this.userProvider.store(this.user).subscribe(function (data) {
            console.log('resposta', data);
        }, function (error) {
            if (error['status'] == 201) {
                _this.showAlert();
            }
            if (error['status'] == 400) {
                _this.showLoginError(JSON.parse(error["error"]).msg);
            }
            else {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__productlist_productlist__["a" /* ProductlistPage */]);
            }
        });
    };
    CadastrarPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Respota',
            subTitle: 'Produto criado com sucesso!',
            buttons: ['OK']
        });
        alert.present();
    };
    CadastrarPage.prototype.showLoginError = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Resposta',
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    return CadastrarPage;
}());
CadastrarPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-cadastrar',template:/*ion-inline-start:"/Users/bruno/Documents/IFTM/Projeto Integrador/code/comprafacil-front-end/src/pages/cadastrar/cadastrar.html"*/'<!--\n  Generated template for the CadastrarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>cadastrar</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n<form (ngSubmit)="enviar()">\n  <ion-list>\n    <ion-item>\n      <ion-label color="primary" floating>Nome</ion-label>\n      <ion-input [(ngModel)]="user.nome" name="nome"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="primary" floating>Email</ion-label>\n      <ion-input [(ngModel)]="user.email" name="email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="primary" floating>Senha</ion-label>\n      <ion-input [(ngModel)]="user.senha" name="senha"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <button ion-button type="submit" style="margin:0 auto">Cadastrar</button>\n    </ion-item>\n  </ion-list>\n</form>\n</ion-content>\n'/*ion-inline-end:"/Users/bruno/Documents/IFTM/Projeto Integrador/code/comprafacil-front-end/src/pages/cadastrar/cadastrar.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
], CadastrarPage);

//# sourceMappingURL=cadastrar.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserProvider = (function () {
    function UserProvider(http) {
        this.http = http;
        this.url = "http://localhost:8080";
        console.log('Hello UserProvider Provider');
    }
    UserProvider.prototype.getUrl = function () {
        return this.url;
    };
    UserProvider.prototype.setUrl = function (url) {
        this.url = url;
    };
    UserProvider.prototype.list = function () {
    };
    UserProvider.prototype.store = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]('Content-Type:application/json; charset=UTF-8');
        var myData = JSON.stringify({ nome: data.nome, email: data.email, senha: data.senha });
        return this.http.post(this.url + '/usuarios', myData, { headers: headers });
    };
    return UserProvider;
}());
UserProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], UserProvider);

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(248);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_cadastrar_cadastrar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_meus_anuncios_meus_anuncios__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_productlist_productlist__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_vender_vender__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_all_products_all_products__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_chat_chat__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_mappage_mappage__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng_socket_io__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_facebook__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_user_user__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_meus_anuncios_meus_anuncios__ = __webpack_require__(90);
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
            __WEBPACK_IMPORTED_MODULE_10__pages_productlist_productlist__["a" /* ProductlistPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_meus_anuncios_meus_anuncios__["a" /* MeusAnunciosPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_mappage_mappage__["a" /* MappagePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_cadastrar_cadastrar__["a" /* CadastrarPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_vender_vender__["a" /* VenderPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mappage/mappage.module#MappagePageModule', name: 'MappagePage', segment: 'mappage', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/meus-anuncios/meus-anuncios.module#MeusAnunciosPageModule', name: 'MeusAnunciosPage', segment: 'meus-anuncios', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/vender/vender.module#VenderPageModule', name: 'VenderPage', segment: 'vender', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_17_ng_socket_io__["SocketIoModule"].forRoot(config)
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_productlist_productlist__["a" /* ProductlistPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_mappage_mappage__["a" /* MappagePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_cadastrar_cadastrar__["a" /* CadastrarPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_meus_anuncios_meus_anuncios__["a" /* MeusAnunciosPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_vender_vender__["a" /* VenderPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_facebook__["a" /* Facebook */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_14__providers_all_products_all_products__["a" /* AllProductsProvider */],
            __WEBPACK_IMPORTED_MODULE_19__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_20__providers_meus_anuncios_meus_anuncios__["a" /* MeusAnunciosProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_productlist_productlist__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_meus_anuncios_meus_anuncios__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_chat_chat__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_mappage_mappage__ = __webpack_require__(117);
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
            { title: 'Todos Produtos', component: __WEBPACK_IMPORTED_MODULE_6__pages_productlist_productlist__["a" /* ProductlistPage */] },
            { title: 'Meus Anuncios', component: __WEBPACK_IMPORTED_MODULE_7__pages_meus_anuncios_meus_anuncios__["a" /* MeusAnunciosPage */] },
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/bruno/Documents/IFTM/Projeto Integrador/code/comprafacil-front-end/src/app/app.html"*/'<ion-menu [content]="content" class="back">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n        <img src="assets/logo.png" alt="">\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class="orange-default">\n    <ion-list class="menu">\n      <button menuClose ion-item no-lines no-padding class="menu-item" *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/bruno/Documents/IFTM/Projeto Integrador/code/comprafacil-front-end/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
        selector: 'page-list',template:/*ion-inline-start:"/Users/bruno/Documents/IFTM/Projeto Integrador/code/comprafacil-front-end/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/bruno/Documents/IFTM/Projeto Integrador/code/comprafacil-front-end/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_all_products_all_products__ = __webpack_require__(185);
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
        selector: 'page-productlist',template:/*ion-inline-start:"/Users/bruno/Documents/IFTM/Projeto Integrador/code/comprafacil-front-end/src/pages/productlist/productlist.html"*/'<!--\n  Generated template for the ProductlistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="orange-default">\n\n  <ion-navbar>\n    <ion-title>Produtos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<!--*ngFor="let product of products"-->\n<ion-content>\n  <ion-grid>\n    <ion-row *ngFor="let product of products">\n      <ion-col col-4 class="img">\n          <img *ngIf="!!product.imagens[0]" [src]="product.imagens[0]" alt="">\n          <img *ngIf="!product.imagens[0]" src="https://www.materialui.co/materialIcons/image/camera_alt_grey_192x192.png" alt="">\n      </ion-col>\n      <ion-col col-5 class="dados">\n        <p><b> {{product.nome}}</b></p>\n        <p>{{product.descricao}}</p>\n      </ion-col>\n      <ion-col col-3 class="preco">\n        {{product.valor}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/bruno/Documents/IFTM/Projeto Integrador/code/comprafacil-front-end/src/pages/productlist/productlist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_all_products_all_products__["a" /* AllProductsProvider */]])
], ProductlistPage);

//# sourceMappingURL=productlist.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeusAnunciosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(36);
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
  Generated class for the MeusAnunciosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MeusAnunciosProvider = (function () {
    function MeusAnunciosProvider(http) {
        this.http = http;
        this.url = "http://localhost:8080";
        console.log('Hello MeusAnunciosProvider Provider');
    }
    MeusAnunciosProvider.prototype.getAnuncios = function () {
        return this.http.get(this.url + '/anuncios');
    };
    MeusAnunciosProvider.prototype.getHistorico = function () {
        return this.http.get(this.url + '/anuncios/usuario/2');
    };
    MeusAnunciosProvider.prototype.storeAnuncio = function (produto) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]('Content-Type:application/json; charset=UTF-8');
        var data = JSON.stringify(produto);
        return this.http.post(this.url + '/anuncios', data, { headers: headers });
    };
    MeusAnunciosProvider.prototype.getCategorias = function () {
        return this.http.get(this.url + '/categorias');
    };
    return MeusAnunciosProvider;
}());
MeusAnunciosProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
], MeusAnunciosProvider);

//# sourceMappingURL=meus-anuncios.js.map

/***/ })

},[231]);
//# sourceMappingURL=main.js.map