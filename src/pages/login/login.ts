import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AllProductsProvider } from '../../providers/all-products/all-products';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

import { ProductlistPage } from '../productlist/productlist';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user: {};
  
    constructor(public navCtrl: NavController, public navParams: NavParams, public providerLogin: AllProductsProvider, private alertCtrl: AlertController) {
      this.user = {};
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad LoginPage');
    }
  
    enviar(){
      
      this.providerLogin.postLogin(this.user).subscribe(data => {
        console.log('resposta', data);
      }, error => {
        if (error['status'] == 201)
          this.showAlert();
        if(error['status'] == 401)
          this.showLoginError();
        else
          this.navCtrl.push(ProductlistPage);
      });
      console.log(this.user);
    }
  
    showAlert() {
      let alert = this.alertCtrl.create({
        title: 'Respota',
        subTitle: 'Produto criado com sucesso!',
        buttons: ['OK']
      });
      alert.present();
    }
  
    showLoginError() {
      let alert = this.alertCtrl.create({
        title: 'Respota',
        subTitle: 'FAZ O LOGIN DIREITO DOIDO',
        buttons: ['OK']
      });
      alert.present();
    }

}
