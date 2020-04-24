import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalInterestsPage } from './personal-interests.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalInterestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalInterestsPageRoutingModule {}
