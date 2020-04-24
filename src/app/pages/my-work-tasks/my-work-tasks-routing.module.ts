import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyWorkTasksPage } from './my-work-tasks.page';

const routes: Routes = [
  {
    path: '',
    component: MyWorkTasksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyWorkTasksPageRoutingModule {}
