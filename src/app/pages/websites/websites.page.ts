import { Component, OnInit } from '@angular/core';
import {PageInfo} from '../../modules/cathegory-info.module';
import {PageProviderService} from '../../services/pages/page-provider.service';

@Component({
  selector: 'app-websites',
  templateUrl: './websites.page.html',
  styleUrls: ['./websites.page.scss'],
})
export class WebsitesPage implements OnInit {
  pages: PageInfo;
  constructor(private pageProviderService: PageProviderService) {
  }

  ngOnInit() {
    this.pages = this.pageProviderService.getWebsitesInfo();
  }

}
