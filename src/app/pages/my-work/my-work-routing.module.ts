import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyWorkPage } from './my-work.page';

const routes: Routes = [
  {
    path: '',
    component: MyWorkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyWorkPageRoutingModule {}
