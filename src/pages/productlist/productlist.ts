import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AllProductsProvider } from '../../providers/all-products/all-products';
import { ProdutoPage } from '../produto/produto';

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
				for(let i in this.products){
				  this.products[i].valor = parseFloat(this.products[i].valor).toFixed(2);
          this.products[i].valor = "R$ " + this.products[i].valor;
          this.products[i].valor = this.products[i].valor.replace(".", ",");
        }
				console.log("retorno: ", data);
			},
			err => {
				console.log("Erro: ", err);
			},
			() => console.log('consulta completa')
		);
  }

  produto(product){
    this.navCtrl.push(ProdutoPage,{product});
  }

}
