import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfessionalExperiencePage } from './professional-experience.page';

const routes: Routes = [
  {
    path: '',
    component: ProfessionalExperiencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfessionalExperiencePageRoutingModule {}
