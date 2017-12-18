import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import { MeusAnunciosProvider } from "../../providers/meus-anuncios/meus-anuncios";
import { AlertController } from 'ionic-angular';

import { ProductlistPage } from '../productlist/productlist';

/**
 * Generated class for the VenderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vender',
  templateUrl: 'vender.html',
})
export class VenderPage {

  title = "Quero vender!";
  url = "http://localhost:8080";
  categorias: any;
  produto = {
    valor: 0.0,
    titulo: '',
    categoria: {
      id: null
    },
    localizacao: null,
    descricao: '',
    vendedor: {
      id: 2
    }
  };
  produtoPostar = {
    valor: 0.0,
    nome: '',
    categoria: {
      id: null
    },
    localizacao: null,
    descricao: '',
    vendedor: {
      id: 2
    }
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public anunciosProvider: MeusAnunciosProvider, private alertCtrl: AlertController) {
    this.getCategorias();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VenderPage');
  }

  storeAnuncio(produto){
    console.log(produto);

    this.produtoPostar = {
      valor: produto.valor,
      nome : produto.nome,
      categoria : {
        id : produto.categoria
      },
      localizacao : {
        id : 1
      },
      descricao : produto.descricao,
      vendedor : {
        id: 2
      }
    }

    this.anunciosProvider.storeAnuncio(this.produtoPostar).subscribe(
      data => {
        console.log(data);
      },
      err => {
        if(err.status == 201){
          let alert = this.alertCtrl.create({
            title: 'Sucesso!',
            subTitle: 'Produto cadastrado com sucesso!',
            buttons: ['Ok']
          });
          alert.present();

          this.navCtrl.push(ProductlistPage);
        }
      },
      () => console.log('consulta de gravacao de produto completa')
    );
  }

  getCategorias(){
    this.anunciosProvider.getCategorias().subscribe(
      data => {
        console.log(data);
        this.categorias = data;
      },
      err => {
        console.log("Erro: ", err);
      },
      () => console.log('consulta completa')
    );
  }

}
