import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyWorkRolePage } from './my-work-role.page';

const routes: Routes = [
  {
    path: '',
    component: MyWorkRolePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyWorkRolePageRoutingModule {}
