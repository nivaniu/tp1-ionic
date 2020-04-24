import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicPage } from './basic.page';

const routes: Routes = [
  {
    path: '',
    component: BasicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicPageRoutingModule {}
