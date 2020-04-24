import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrameworksPageRoutingModule } from './frameworks-routing.module';

import { FrameworksPage } from './frameworks.page';
import {MainPageModule} from '../main/main.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FrameworksPageRoutingModule,
        MainPageModule
    ],
  declarations: [FrameworksPage]
})
export class FrameworksPageModule {}
