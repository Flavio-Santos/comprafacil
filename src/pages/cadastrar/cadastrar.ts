import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
  user: {
    senha:String ;
    email:String ;
  };
  
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarPage');
  }
  enviar(){
    console.log(this.user.email)
  }
}
