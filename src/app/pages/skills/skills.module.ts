import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkillsPageRoutingModule } from './skills-routing.module';

import { SkillsPage } from './skills.page';
import {MainPageModule} from '../main/main.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SkillsPageRoutingModule,
        MainPageModule
    ],
  declarations: [SkillsPage]
})
export class SkillsPageModule {}
