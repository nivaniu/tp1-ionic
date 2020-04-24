import {Component, OnInit} from '@angular/core';
import {PageProviderService} from '../../services/pages/page-provider.service';
import {PageInfo} from '../../modules/cathegory-info.module';

@Component({
    selector: 'app-dev',
    templateUrl: './dev.page.html',
    styleUrls: ['./dev.page.scss'],
})
export class DevPage implements OnInit {
    pages: PageInfo;

    constructor(private pageProviderService: PageProviderService) {
    }

    ngOnInit() {
        this.pages = this.pageProviderService.getDevInfo();
    }

}
