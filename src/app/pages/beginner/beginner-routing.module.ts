import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeginnerPage } from './beginner.page';

const routes: Routes = [
  {
    path: '',
    component: BeginnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeginnerPageRoutingModule {}
