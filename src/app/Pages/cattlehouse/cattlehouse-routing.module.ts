import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CattlehousePage } from './cattlehouse.page';

const routes: Routes = [
  {
    path: '',
    component: CattlehousePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CattlehousePageRoutingModule {}
