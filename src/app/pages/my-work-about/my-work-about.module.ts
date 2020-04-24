import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyWorkAboutPageRoutingModule } from './my-work-about-routing.module';

import { MyWorkAboutPage } from './my-work-about.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyWorkAboutPageRoutingModule
  ],
  declarations: [MyWorkAboutPage]
})
export class MyWorkAboutPageModule {}
