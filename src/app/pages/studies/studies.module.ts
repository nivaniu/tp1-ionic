import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudiesPageRoutingModule } from './studies-routing.module';

import { StudiesPage } from './studies.page';
import {MainPageModule} from '../main/main.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        StudiesPageRoutingModule,
        MainPageModule
    ],
  declarations: [StudiesPage]
})
export class StudiesPageModule {}
