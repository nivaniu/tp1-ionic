import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NetworkBasicPageRoutingModule } from './network-basic-routing.module';

import { NetworkBasicPage } from './network-basic.page';
import {MainPageModule} from '../main/main.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NetworkBasicPageRoutingModule,
        MainPageModule
    ],
  declarations: [NetworkBasicPage]
})
export class NetworkBasicPageModule {}
