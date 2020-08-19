import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VaccinecattlePage } from './vaccinecattle.page';

const routes: Routes = [
  {
    path: '',
    component: VaccinecattlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VaccinecattlePageRoutingModule {}
