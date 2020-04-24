import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyWorkRolePageRoutingModule } from './my-work-role-routing.module';

import { MyWorkRolePage } from './my-work-role.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyWorkRolePageRoutingModule
  ],
  declarations: [MyWorkRolePage]
})
export class MyWorkRolePageModule {}
