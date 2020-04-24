import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MobileDevPageRoutingModule } from './mobile-dev-routing.module';

import { MobileDevPage } from './mobile-dev.page';
import {MainPageModule} from '../main/main.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MobileDevPageRoutingModule,
        MainPageModule
    ],
  declarations: [MobileDevPage]
})
export class MobileDevPageModule {}
