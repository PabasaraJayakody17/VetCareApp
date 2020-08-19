import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VaccinecattlePageRoutingModule } from './vaccinecattle-routing.module';

import { VaccinecattlePage } from './vaccinecattle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VaccinecattlePageRoutingModule
  ],
  declarations: [VaccinecattlePage]
})
export class VaccinecattlePageModule {}
