import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SickcattlePageRoutingModule } from './sickcattle-routing.module';

import { SickcattlePage } from './sickcattle.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    SickcattlePageRoutingModule
  ],
  declarations: [SickcattlePage]
})
export class SickcattlePageModule {}
