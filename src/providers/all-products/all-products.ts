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

  postProduto(data) {
    let headers = new HttpHeaders('Content-Type:application/json; charset=UTF-8');
    let myData = JSON.stringify({ email: data.email, senha:data.senha });
    return this.http.post(this.url + '/login', myData, { headers: headers });
  }

  consultaServidor() {
    return this.http.get(this.url+'/produtos');
  }

}
