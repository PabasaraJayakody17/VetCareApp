import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CattlehousePageRoutingModule } from './cattlehouse-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CattlehousePage } from './cattlehouse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    CattlehousePageRoutingModule
  ],
  declarations: [CattlehousePage]
})
export class CattlehousePageModule {}
