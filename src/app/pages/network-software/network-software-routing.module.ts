import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NetworkSoftwarePage } from './network-software.page';

const routes: Routes = [
  {
    path: '',
    component: NetworkSoftwarePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NetworkSoftwarePageRoutingModule {}
