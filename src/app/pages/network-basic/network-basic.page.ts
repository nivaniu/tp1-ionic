import {Component, OnInit} from '@angular/core';
import {PageProviderService} from '../../services/pages/page-provider.service';
import {PageInfo} from '../../modules/cathegory-info.module';

@Component({
    selector: 'app-network-basic',
    templateUrl: './network-basic.page.html',
    styleUrls: ['./network-basic.page.scss'],
})
export class NetworkBasicPage implements OnInit {
    pages: PageInfo;
    constructor(private pageProviderService: PageProviderService) {
    }

    ngOnInit() {
      this.pages = this.pageProviderService.getNetBasicInfo();
    }

}
