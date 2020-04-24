import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NetworkPageRoutingModule } from './network-routing.module';

import { NetworkPage } from './network.page';
import {MainPageModule} from '../main/main.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NetworkPageRoutingModule,
        MainPageModule
    ],
  declarations: [NetworkPage]
})
export class NetworkPageModule {}
