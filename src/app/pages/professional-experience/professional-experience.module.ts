import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfessionalExperiencePageRoutingModule } from './professional-experience-routing.module';

import { ProfessionalExperiencePage } from './professional-experience.page';
import {MainPageModule} from '../main/main.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProfessionalExperiencePageRoutingModule,
        MainPageModule
    ],
  declarations: [ProfessionalExperiencePage]
})
export class ProfessionalExperiencePageModule {}
