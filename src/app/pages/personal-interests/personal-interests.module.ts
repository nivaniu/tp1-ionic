import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalInterestsPageRoutingModule } from './personal-interests-routing.module';

import { PersonalInterestsPage } from './personal-interests.page';
import {MainPageModule} from '../main/main.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PersonalInterestsPageRoutingModule,
        MainPageModule
    ],
  declarations: [PersonalInterestsPage]
})
export class PersonalInterestsPageModule {}
