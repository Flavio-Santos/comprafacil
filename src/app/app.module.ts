import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CadastrarPage } from '../pages/cadastrar/cadastrar'
import { ProductlistPage } from '../pages/productlist/productlist';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AllProductsProvider } from '../providers/all-products/all-products';

import { ChatPage } from '../pages/chat/chat';
import { MappagePage } from '../pages/mappage/mappage';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { Facebook } from '@ionic-native/facebook';
import { UserProvider } from '../providers/user/user';
//colocar ali em cima se der pau FacebookLoginResponse

const config: SocketIoConfig = { url: 'http://10.10.20.138:3001', options: {} };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ProductlistPage,
    ChatPage,
    ListPage,
    MappagePage,
    CadastrarPage,
    LoginPage
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
    ListPage,
    ProductlistPage,
    ChatPage,
    ListPage,
    MappagePage,
    CadastrarPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AllProductsProvider,
    UserProvider
  ]
})
export class AppModule {}
