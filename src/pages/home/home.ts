import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pageData: {title: string};

  constructor(public navCtrl: NavController, public fb: Facebook) {
    this.pageData = {title: 'Login'}
  }

  doLogin(){
    this.fb.login(['public_profile', 'email'])
      .then((res: FacebookLoginResponse) => alert('Logged into Facebook!'))
      .catch(e => alert('Error logging into Facebook'));
  }

}
