import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyWorkTasksPageRoutingModule } from './my-work-tasks-routing.module';

import { MyWorkTasksPage } from './my-work-tasks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyWorkTasksPageRoutingModule
  ],
  declarations: [MyWorkTasksPage]
})
export class MyWorkTasksPageModule {}
