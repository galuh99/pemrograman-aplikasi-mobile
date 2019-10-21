import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ApiProvider } from '../../providers/api/api';
import { DetilArtikelPage } from '../detil-artikel/detil-artikel';

@IonicPage()
@Component({
  selector: 'page-artikel',
templateUrl: 'artikel.html',
})
export class ArtikelPage {
  artikels: Observable<any>;

  constructor(public navCtrl: NavController, public apiProvider: ApiProvider) {
    this.artikels = this.apiProvider.getArtikel();
    
  }

  openDetails(artikel){
    this.navCtrl.push(DetilArtikelPage, {film: artikel});
  }

}
