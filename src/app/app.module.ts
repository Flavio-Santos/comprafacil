import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
<<<<<<< HEAD
import { ProductlistPage } from '../pages/productlist/productlist'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AllProductsProvider } from '../providers/all-products/all-products';
=======
import { ChatPage } from '../pages/chat/chat';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
const config: SocketIoConfig = { url: 'http://10.10.20.28:3001', options: {} };
>>>>>>> d31f79b7790aa1250c2711466149340d0c9c3a75

@NgModule({
  declarations: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    ListPage,
    ProductlistPage
=======
    ChatPage,
    ListPage
>>>>>>> d31f79b7790aa1250c2711466149340d0c9c3a75
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    SocketIoModule.forRoot(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    ListPage,
    ProductlistPage
=======
    ChatPage,
    ListPage
>>>>>>> d31f79b7790aa1250c2711466149340d0c9c3a75
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AllProductsProvider
  ]
})
export class AppModule {}
