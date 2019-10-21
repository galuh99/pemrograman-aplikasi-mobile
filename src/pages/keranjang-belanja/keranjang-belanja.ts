import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-keranjang-belanja',
  templateUrl: 'keranjang-belanja.html',
})
export class KeranjangBelanjaPage {
  produkData: {name: string, quantity: number};
  constructor(private navParams: NavParams, private navCtrl: NavController) {
  
  this.produkData = this.navParams.data;}
    onConfirm(){
      this.navCtrl.popToRoot();
    }
}
