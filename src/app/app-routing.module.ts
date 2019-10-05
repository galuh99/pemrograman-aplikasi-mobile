import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  
  { path: 'tambahkeranjang', loadChildren: './tambahkeranjang/tambahkeranjang.module#TambahkeranjangPageModule' },
  { path: 'tambahproduk', loadChildren: './tambahproduk/tambahproduk.module#TambahprodukPageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
