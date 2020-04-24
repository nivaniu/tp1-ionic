import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NetworkSoftwarePageRoutingModule } from './network-software-routing.module';

import { NetworkSoftwarePage } from './network-software.page';
import {MainPageModule} from '../main/main.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NetworkSoftwarePageRoutingModule,
        MainPageModule
    ],
  declarations: [NetworkSoftwarePage]
})
export class NetworkSoftwarePageModule {}
