import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SickcattlePage } from './sickcattle.page';

const routes: Routes = [
  {
    path: '',
    component: SickcattlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SickcattlePageRoutingModule {}
