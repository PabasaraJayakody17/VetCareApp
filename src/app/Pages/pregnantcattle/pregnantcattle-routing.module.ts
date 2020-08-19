import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PregnantcattlePage } from './pregnantcattle.page';

const routes: Routes = [
  {
    path: '',
    component: PregnantcattlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PregnantcattlePageRoutingModule {}
