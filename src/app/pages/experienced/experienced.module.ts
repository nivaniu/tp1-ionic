import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExperiencedPageRoutingModule } from './experienced-routing.module';

import { ExperiencedPage } from './experienced.page';
import {MainPageModule} from '../main/main.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ExperiencedPageRoutingModule,
        MainPageModule
    ],
  declarations: [ExperiencedPage]
})
export class ExperiencedPageModule {}
