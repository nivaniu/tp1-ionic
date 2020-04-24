import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvancedPageRoutingModule } from './advanced-routing.module';

import { AdvancedPage } from './advanced.page';
import {MainPageModule} from '../main/main.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AdvancedPageRoutingModule,
        MainPageModule
    ],
  declarations: [AdvancedPage]
})
export class AdvancedPageModule {}
