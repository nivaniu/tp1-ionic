import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiveLanguagesPageRoutingModule } from './live-languages-routing.module';

import { LiveLanguagesPage } from './live-languages.page';
import {MainPageModule} from '../main/main.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiveLanguagesPageRoutingModule,
    MainPageModule
  ],
  declarations: [LiveLanguagesPage]
})
export class LiveLanguagesPageModule {}
