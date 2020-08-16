import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarmInfoPageRoutingModule } from './farm-info-routing.module';

import { FarmInfoPage } from './farm-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FarmInfoPageRoutingModule
  ],
  declarations: [FarmInfoPage]
})
export class FarmInfoPageModule {}
