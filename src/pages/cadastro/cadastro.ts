import {Component} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import * as firebase from 'firebase';

@Component({
    selector: 'page-cadastro',
    templateUrl: 'cadastro.html',
})
export class CadastroPage {

    nome: any;
    telefone: any;

    ref_lanches = firebase.database().ref('usuario/');
    usuario = firebase.auth();
    email: any;
    senha: any;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public alert: AlertController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CadastroPage');
    }

    cadastrar() {
        this.usuario.createUserWithEmailAndPassword(this.email, this.senha).then(data => {
            this.ref_lanches.child(data['user']['uid']).set({
                nome: this.nome,
                telefone: this.telefone
            }).then(data => {
                this.alert.create({
                    title: 'Atenção',
                    message: 'Cadastrado com sucesso!',
                    buttons: ['Ok']
                }).present();
            })
        });
    }
}
