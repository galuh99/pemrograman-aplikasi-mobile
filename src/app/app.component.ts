import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ArtikelPage } from '../pages/artikel/artikel';
import { LoginPage } from '../pages/login/login';
import { ProdukPage } from '../pages/produk/produk';
import { KeranjangBelanjaPage } from '../pages/keranjang-belanja/keranjang-belanja';
import { KomentarPage } from '../pages/komentar/komentar';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage, icon:'home' },
      { title: 'List', component: ListPage, icon: 'reorder' },
      { title: 'Login', component: LoginPage, icon:'log-in' },
      { title: 'Produk', component: ProdukPage, icon: 'pricetags' },
      { title: 'Keranjang Belanja', component: KeranjangBelanjaPage, icon: 'cart' },
      { title: 'Daftar Artikel', component: ArtikelPage, icon: 'book'},
      { title: 'Daftar Komentar', component:KomentarPage ,icon:'create'}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}

