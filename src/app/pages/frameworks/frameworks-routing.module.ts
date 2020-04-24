import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrameworksPage } from './frameworks.page';

const routes: Routes = [
  {
    path: '',
    component: FrameworksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrameworksPageRoutingModule {}
