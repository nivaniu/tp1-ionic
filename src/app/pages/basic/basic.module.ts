import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasicPageRoutingModule } from './basic-routing.module';

import { BasicPage } from './basic.page';
import {MainPageModule} from '../main/main.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        BasicPageRoutingModule,
        MainPageModule
    ],
  declarations: [BasicPage]
})
export class BasicPageModule {}
