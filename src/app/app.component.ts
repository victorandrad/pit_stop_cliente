import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import * as firebase from 'firebase'
import {firebasConfig} from "./envroiment";
import {LoginPage} from "../pages/login/login";
import {Storage} from "@ionic/storage";
import {HomePage} from "../pages/home/home";

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any;

    constructor(platform: Platform,
                statusBar: StatusBar,
                splashScreen: SplashScreen,
                storage: Storage) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        firebase.initializeApp(firebasConfig);

        storage.get('logado').then(data => {
            if (data == true) {
                this.rootPage = HomePage;
            } else {
                this.rootPage = LoginPage;
            }
        })

    }
}
