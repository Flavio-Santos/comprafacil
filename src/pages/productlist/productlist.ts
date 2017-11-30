import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AllProductsProvider } from '../../providers/all-products/all-products'

/**
 * Generated class for the ProductlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-productlist',
  templateUrl: 'productlist.html',
})
export class ProductlistPage {


  public products: Object;
  constructor(public navCtrl: NavController, public navParams: NavParams, private allProducts: AllProductsProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductlistPage');
    this.allProducts.consultaServidor().subscribe(
			data => {
				this.products = data;
				console.log("retorno: ", data);
			},
			err => {
				console.log("Erro: ", err);
			},
			() => console.log('consulta completa')
		);
  }



}
