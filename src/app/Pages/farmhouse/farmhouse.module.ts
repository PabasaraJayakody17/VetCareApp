import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarmhousePageRoutingModule } from './farmhouse-routing.module';

import { FarmhousePage } from './farmhouse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FarmhousePageRoutingModule
  ],
  declarations: [FarmhousePage]
})
export class FarmhousePageModule {}
