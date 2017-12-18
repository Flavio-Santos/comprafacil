import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ModalController, ViewController  } from 'ionic-angular';
import { ModalPagamentoPage } from '../modal-pagamento/modal-pagamento';

/**
 * Generated class for the ProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html',
})
export class ProdutoPage {
  produto: any;
  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.produto = navParams.data.product;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutoPage');
  }
  Comprar(){
    let modal = this.modalCtrl.create(ModalPagamentoPage);
    modal.present();
  }
}
