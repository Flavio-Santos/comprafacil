import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { VenderPage } from '../vender/vender';
import { ProductlistPage } from '../productlist/productlist';
import { MeusAnunciosProvider } from '../../providers/meus-anuncios/meus-anuncios';

/**
 * Generated class for the MeusAnunciosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meus-anuncios',
  templateUrl: 'meus-anuncios.html',
})
export class MeusAnunciosPage {

  public title = "Meus Anuncios";
  anuncios: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public meusAnunciosProvider: MeusAnunciosProvider) {
    this.getAnuncios();
  }

  getAnuncios(){
    this.meusAnunciosProvider.getHistorico().subscribe(
      data => {
        this.anuncios = data;
        console.log("retorno anuncios: ", this.anuncios);
      },
      err => {
        console.log("Erro: ", err);
      },
      () => console.log('consulta completa')
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeusAnunciosPage');
  }

  anunciar(){
    this.navCtrl.push(VenderPage);
  }

  verAnuncios(){
    this.navCtrl.push(ProductlistPage);
  }

}
