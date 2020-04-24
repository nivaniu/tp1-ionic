import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyWorkAboutPage } from './my-work-about.page';

const routes: Routes = [
  {
    path: '',
    component: MyWorkAboutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyWorkAboutPageRoutingModule {}
