import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { ProductlistPage } from '../productlist/productlist';
import { LoginPage } from '../login/login';

import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the CadastrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-cadastrar',
  templateUrl: 'cadastrar.html',
})



export class CadastrarPage {
  user: {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider: UserProvider, private alertCtrl: AlertController) {
    this.user = {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarPage');
  }

  enviar(){

    this.userProvider.store(this.user).subscribe(data => {
      console.log('resposta', data);
    }, error => {

      if (error['status'] == 201){
        this.showAlert();
        this.navCtrl.push(LoginPage);
      }if(error['status'] == 400){
        this.showLoginError(JSON.parse(error["error"]).msg);
      }

    });
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Resposta',
      subTitle: 'Cadastrado com sucesso!',
      buttons: ['OK']
    });
    alert.present();
  }

  showLoginError(message) {
    let alert = this.alertCtrl.create({
      title: 'Resposta',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }
}
