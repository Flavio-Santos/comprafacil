import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MappagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;

@IonicPage()
@Component({
  selector: 'page-mappage',
  templateUrl: 'mappage.html',
})
export class MappagePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  marker: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    setTimeout(()=>{
      this.loadMap();
      document.getElementById('search').style.display = 'block';

    }, 2000)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MappagePage');
  }

  loadMap(){

    let latLng = new google.maps.LatLng(-18.9364604, -48.2841558);
    let latLngMarker = new google.maps.LatLng(-18.9364604, -48.2841558);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    this.marker = new google.maps.Marker({
      position: latLngMarker,
      map: this.map,
      title: 'Hello World!'
    });

  }

}
