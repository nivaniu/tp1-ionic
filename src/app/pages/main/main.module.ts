import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {MainPageRoutingModule} from './main-routing.module';

import {MainPage} from './main.page';
import {CathegoryComponent} from '../../components/cathegory/cathegory.component';
import {AvatarComponent} from '../../components/avatar/avatar.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MainPageRoutingModule
    ],
    exports: [
        AvatarComponent,
        CathegoryComponent
    ],
    declarations: [MainPage, CathegoryComponent, AvatarComponent]
})
export class MainPageModule {

}
