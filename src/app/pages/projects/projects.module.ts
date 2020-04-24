import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectsPageRoutingModule } from './projects-routing.module';

import { ProjectsPage } from './projects.page';
import {MainPageModule} from '../main/main.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProjectsPageRoutingModule,
        MainPageModule
    ],
  declarations: [ProjectsPage]
})
export class ProjectsPageModule {}
