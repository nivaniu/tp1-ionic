import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExperiencedPage } from './experienced.page';

const routes: Routes = [
  {
    path: '',
    component: ExperiencedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExperiencedPageRoutingModule {}
