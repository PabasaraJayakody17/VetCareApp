import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDetailsPageRoutingModule } from './add-details-routing.module';

import { AddDetailsPage } from './add-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddDetailsPageRoutingModule
  ],
  declarations: [AddDetailsPage]
})
export class AddDetailsPageModule {}
