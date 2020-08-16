import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarmfinderPageRoutingModule } from './farmfinder-routing.module';

import { FarmfinderPage } from './farmfinder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FarmfinderPageRoutingModule
  ],
  declarations: [FarmfinderPage]
})
export class FarmfinderPageModule {}
