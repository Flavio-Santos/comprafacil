import { Component, ViewChild } from '@angular/core';
import { Nav, NavController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { CadastrarPage } from '../cadastrar/cadastrar';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;
  pageData: {title: string};

  constructor(public navCtrl: NavController, public fb: Facebook) {
    this.pageData = {title: 'Login'}
  }

  doLogin(){
    this.fb.login(['public_profile', 'email'])
      .then((res: FacebookLoginResponse) => alert('Logged into Facebook!'))
      .catch(e => alert('Error logging into Facebook'));
  }
  cadastro(){
    this.navCtrl.push(CadastrarPage)
  }
  logar(){
    this.navCtrl.push(LoginPage);
  }
}
