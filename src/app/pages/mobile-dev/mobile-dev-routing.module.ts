import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MobileDevPage } from './mobile-dev.page';

const routes: Routes = [
  {
    path: '',
    component: MobileDevPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobileDevPageRoutingModule {}
