import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import * as firebase from 'firebase';
import {Storage} from "@ionic/storage";
import {HomePage} from "../home/home";
import {CadastroPage} from "../cadastro/cadastro";

@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    email: string;
    senha: string;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public viewCtrl: ViewController,
                public storage: Storage) {
    }

    ngOnInit() {
        // firebase.auth().signOut();
        // firebase.auth().onAuthStateChanged(data => {
        //     console.log(data['uid']);
        // });

        // firebase.auth().sendPasswordResetEmail('victor.andrade62@hotmail.com');
    }

    entrar() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.senha).then(data => {
            if (data['user']['uid'] !== null || data['user']['uid'] !== undefined) {
                this.storage.set('logado', true);
                this.navCtrl.push(HomePage);
                this.viewCtrl.dismiss();
            }
        });
    }

    cadastro() {
        this.navCtrl.push(CadastroPage, '');
    }
}
