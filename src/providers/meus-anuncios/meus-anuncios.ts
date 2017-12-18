import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders} from "@angular/common/http";

/*
  Generated class for the MeusAnunciosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MeusAnunciosProvider {

  private url = "http://localhost:8090";

  constructor(public http: HttpClient) {
    console.log('Hello MeusAnunciosProvider Provider');
  }

  getAnuncios(){
    return this.http.get(this.url+'/anuncios');
  }

  getHistorico(){
    return this.http.get(this.url+'/anuncios/usuario/2');
  }

  storeAnuncio(produto){
    let headers = new HttpHeaders('Content-Type:application/json; charset=UTF-8');
    let data = JSON.stringify(produto);
    return this.http.post(this.url + '/anuncios', data, { headers: headers });
  }

  getCategorias() {
    return this.http.get(this.url+'/categorias');
  }

}
