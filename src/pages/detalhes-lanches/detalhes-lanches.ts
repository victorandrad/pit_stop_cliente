import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Storage} from "@ionic/storage";

@Component({
    selector: 'page-detalhes-lanches',
    templateUrl: 'detalhes-lanches.html',
})
export class DetalhesLanchesPage {

    item: any = [];
    quantidade: number = 1;
    preco_total: number;
    observacao: any = '';
    carrinho: any = [];

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public storage: Storage) {
    }

    ionViewDidLoad() {
        this.item.push(this.navParams.get('item'));
        this.preco_total = this.item['0']['preco'] * this.quantidade;
        this.storage.get('carrinho').then(data => {
            if (data !== null) {
                this.carrinho = data;
            }
        });
    }

    async addCarrinho(item: any) {

        let item_carrinho = item;

        item_carrinho['preco_total'] = this.preco_total;
        item_carrinho['quantidade'] = this.quantidade;
        item_carrinho['observacao'] = this.observacao;

        this.carrinho.push(item_carrinho);

        this.storage.set('carrinho', this.carrinho);

    }

    incrementa(preco) {
        this.quantidade += 1;
        this.preco_total = preco * this.quantidade;
    }

    decrementa(preco) {
        if (this.quantidade > 1) {
            this.quantidade -= 1;
            this.preco_total = preco * this.quantidade;
        }

    }

}
