import { Component, OnInit } from '@angular/core';
import {PageInfo} from '../../modules/cathegory-info.module';
import {PageProviderService} from '../../services/pages/page-provider.service';

@Component({
  selector: 'app-mobile-dev',
  templateUrl: './mobile-dev.page.html',
  styleUrls: ['./mobile-dev.page.scss'],
})
export class MobileDevPage implements OnInit {
  pages: PageInfo;
  constructor(private pageProviderService: PageProviderService) {
  }

  ngOnInit() {
    this.pages = this.pageProviderService.getMobileInfo();
  }

}
