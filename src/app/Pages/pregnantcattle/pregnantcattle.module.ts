import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PregnantcattlePageRoutingModule } from './pregnantcattle-routing.module';

import { PregnantcattlePage } from './pregnantcattle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PregnantcattlePageRoutingModule
  ],
  declarations: [PregnantcattlePage]
})
export class PregnantcattlePageModule {}
