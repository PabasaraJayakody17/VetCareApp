import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SickcattlePageRoutingModule } from './sickcattle-routing.module';

import { SickcattlePage } from './sickcattle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SickcattlePageRoutingModule
  ],
  declarations: [SickcattlePage]
})
export class SickcattlePageModule {}
