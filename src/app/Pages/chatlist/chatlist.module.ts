import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatlistPageRoutingModule } from './chatlist-routing.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ChatlistPage } from './chatlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatlistPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ChatlistPage]
})
export class ChatlistPageModule {}
