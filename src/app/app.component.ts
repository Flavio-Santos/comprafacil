import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Facebook } from '@ionic-native/facebook';


import { HomePage } from '../pages/home/home';
import { ProductlistPage } from '../pages/productlist/productlist';
import { MeusAnunciosPage } from '../pages/meus-anuncios/meus-anuncios';
import { ChatPage } from '../pages/chat/chat';
import { MappagePage } from '../pages/mappage/mappage';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public fb: Facebook) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Todos Produtos', component: ProductlistPage },
      { title: 'Meus Anuncios', component: MeusAnunciosPage },
      { title: 'Chat', component: ChatPage },
      { title: 'Maps', component: MappagePage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.backgroundColorByHexString('#D07400');
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
