import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TambahkeranjangPage } from './tambahkeranjang.page';

const routes: Routes = [
  {
    path: '',
    component: TambahkeranjangPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TambahkeranjangPage]
})
export class TambahkeranjangPageModule {}
