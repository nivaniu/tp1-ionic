import {Component, OnInit} from '@angular/core';
import {PageProviderService} from '../../services/pages/page-provider.service';
import {PageInfo} from '../../modules/cathegory-info.module';

@Component({
    selector: 'app-basic',
    templateUrl: './basic.page.html',
    styleUrls: ['./basic.page.scss'],
})
export class BasicPage implements OnInit {
    pages: PageInfo;

    constructor(private pageProviderService: PageProviderService) {
    }

    ngOnInit() {
        this.pages = this.pageProviderService.getDevBasicInfo();
    }

}
