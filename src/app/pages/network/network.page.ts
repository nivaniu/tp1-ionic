import {Component, OnInit} from '@angular/core';
import {PageProviderService} from '../../services/pages/page-provider.service';
import {PageInfo} from '../../modules/cathegory-info.module';

@Component({
    selector: 'app-network',
    templateUrl: './network.page.html',
    styleUrls: ['./network.page.scss'],
})
export class NetworkPage implements OnInit {
    pages: PageInfo;

    constructor(private pageProviderService: PageProviderService) {
    }

    ngOnInit() {
        this.pages = this.pageProviderService.getNetInfo();
    }

}
