import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  url = "http://localhost:8080";

  getUrl(){
    return this.url;
  }
  setUrl(url){
    this.url = url;
  }

  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }

  list(){

  }

  store(data){
    let headers = new HttpHeaders('Content-Type:application/json; charset=UTF-8');
    let myData = JSON.stringify({ nome: data.nome, email: data.email, senha:data.senha });
    return this.http.post(this.url + '/usuarios', myData, { headers: headers });
  }

}
