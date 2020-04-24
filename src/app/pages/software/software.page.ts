import {Component, OnInit} from '@angular/core';
import {PageInfo} from '../../modules/cathegory-info.module';
import {PageProviderService} from '../../services/pages/page-provider.service';

@Component({
    selector: 'app-software',
    templateUrl: './software.page.html',
    styleUrls: ['./software.page.scss'],
})
export class SoftwarePage implements OnInit {
    pages: PageInfo;

    constructor(private pageProviderService: PageProviderService) {
        this.pages = pageProviderService.getDebSoftwareInfo();
    }

    ngOnInit() {
    }

}
