import { Component } from '@angular/core';
import { NavController, NavParams,  ViewController  } from 'ionic-angular';

import { MappagePage } from '../mappage/mappage';

/**
 * Generated class for the ModalPagamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-modal-pagamento',
  templateUrl: 'modal-pagamento.html',
})
export class ModalPagamentoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPagamentoPage');
  }
  lessModal() {
    this.viewCtrl.dismiss();
  }
  chamaLoc(){
    this.viewCtrl.dismiss();
    this.navCtrl.setRoot(MappagePage);
  }
}
