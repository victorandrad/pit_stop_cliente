import {Component} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {Storage} from "@ionic/storage";
import * as firebase from 'firebase'

@Component({
    selector: 'page-carrinho',
    templateUrl: 'carrinho.html',
})
export class CarrinhoPage {

    items_carrinho: any;
    total_carrinho: number = 0;

    uid: any;

    ref_carrinho = firebase.database().ref('pedido/');

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public storage: Storage,
                public alertCtrl: AlertController) {
    }

    ionViewDidLoad() {
        this.initialize();
    }

    async initialize() {
        await this.storage.get('carrinho').then(data => {
            this.items_carrinho = data;
        });

        if (this.items_carrinho !== null) {
            this.items_carrinho.forEach(data => {
                this.total_carrinho += data.preco_total;
            });
        }

    }

    async excluiItemCarrinho(item) {

        this.alertCtrl.create({
            title: 'Atenção',
            message: 'Deseja realmente exluir este item do carrinho?',
            buttons: [
                {
                    text: 'Sim',
                    handler: () => {
                        for (let i = 0; i < this.items_carrinho.length; i++) {

                            if (this.items_carrinho[i] == item) {

                                this.items_carrinho.splice(i, 1);

                            }

                        }

                        this.storage.set('carrinho', this.items_carrinho);

                        this.total_carrinho = 0;

                        this.initialize();
                    }
                },
                {
                    text: 'Não'
                }

            ]
        }).present();
    }

    async addPedido() {

        await firebase.auth().onAuthStateChanged(data => {
            this.uid = data.uid;
        });

        let item = this.ref_carrinho.child(this.uid).push();
        item.set(
            {
                items: this.items_carrinho,
                status: 'Recebido'
            }
        );

        await this.storage.remove('carrinho');

        this.initialize();

    }

}
