import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCattlePageRoutingModule } from './add-cattle-routing.module';

import { AddCattlePage } from './add-cattle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCattlePageRoutingModule
  ],
  declarations: [AddCattlePage]
})
export class AddCattlePageModule {}
