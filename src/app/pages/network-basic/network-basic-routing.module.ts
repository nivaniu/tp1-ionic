import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NetworkBasicPage } from './network-basic.page';

const routes: Routes = [
  {
    path: '',
    component: NetworkBasicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NetworkBasicPageRoutingModule {}
