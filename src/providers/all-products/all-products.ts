import { Platform } from 'ionic-angular';
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
  url = "/cloudfoundry"
  constructor(public http: HttpClient, private _platform: Platform) {
    if (this._platform.is("cordova")) {
      this.url = "http://localhost:8080";
    }
  }

  postProduto(data) {
    var headers = new HttpHeaders('Content-Type:application/json; charset=UTF-8');
    var myData = JSON.stringify({ nome: data.nome });
    return this.http.post(this.url + '/produtos', myData, { headers: headers });
  }

  consultaServidor() {
    return this.http.get(this.url+'/categorias');
  }

}
