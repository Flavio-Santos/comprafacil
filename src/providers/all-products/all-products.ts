//import { Platform } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

/*
  Generated class for the AllProductsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AllProductsProvider {

  url = "http://localhost:8080";


  constructor(public http: HttpClient) {
    /*if (this._platform.is("cordova")) {
      this.url = "http://10.10.21.3:8080";
    }*/
  }

  postAnuncio(data) {
    var headers = new HttpHeaders('Content-Type:application/json; charset=UTF-8');
    var myData = JSON.stringify({ email: data.email, senha:data.senha });
    return this.http.post(this.url + '/anuncio', myData, { headers: headers });

  }

  postLogin(data) {
    var headers = new HttpHeaders('Content-Type:application/json; charset=UTF-8');
    var myData = JSON.stringify({ email: data.email, senha:data.senha });
    return this.http.post(this.url + '/login', myData, { headers: headers });
  }
  postCadastrar(data) {
    var headers = new HttpHeaders('Content-Type:application/json; charset=UTF-8');
    var myData = JSON.stringify({ id:null, email: data.email, nome: data.nome });
    return this.http.post(this.url + '/usuarios', myData, { headers: headers });
  }
  
  consultaServidor() {
    return this.http.get(this.url+'/produtos');
  }

  todosAnuncios(){
    return this.http.get(this.url+'/produtos');    
  }
  localizacoes(){
    return this.http.get(this.url+'/localizacoes'); 
  }

}
