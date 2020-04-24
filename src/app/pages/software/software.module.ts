import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoftwarePageRoutingModule } from './software-routing.module';

import { SoftwarePage } from './software.page';
import {MainPageModule} from '../main/main.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SoftwarePageRoutingModule,
        MainPageModule
    ],
  declarations: [SoftwarePage]
})
export class SoftwarePageModule {}
