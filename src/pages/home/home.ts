import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import * as firebase from 'firebase';
import {DetalhesLanchesPage} from "../detalhes-lanches/detalhes-lanches";
import {CarrinhoPage} from "../carrinho/carrinho";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    items = [];
    ref_lanches = firebase.database().ref('lanches/');

    constructor(public navCtrl: NavController) {

    }

    ngOnInit() {

        this.initialize();
    }

    async initialize() {
        await this.ref_lanches.on('value', res => {
            res.forEach(data => {
                this.items.push(data.val());
            });
        });
    }

    detalhesLanche(item) {
        this.navCtrl.push(DetalhesLanchesPage, {item: item});
    }

    carrinhoCompras() {
        this.navCtrl.push(CarrinhoPage);
    }
}
