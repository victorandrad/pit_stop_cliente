import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {registerLocaleData} from "@angular/common";
import localePt from '@angular/common/locales/pt';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {DetalhesLanchesPage} from "../pages/detalhes-lanches/detalhes-lanches";
import {LoginPage} from "../pages/login/login";
import {IonicStorageModule} from "@ionic/storage";
import {CarrinhoPage} from "../pages/carrinho/carrinho";

registerLocaleData(localePt);

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        TabsPage,
        LoginPage,
        DetalhesLanchesPage,
        CarrinhoPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot({
            name: 'pit_stop_cliente',
            driverOrder: ['localstorage']
        })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        TabsPage,
        LoginPage,
        DetalhesLanchesPage,
        CarrinhoPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        Storage
    ]
})
export class AppModule {
}
