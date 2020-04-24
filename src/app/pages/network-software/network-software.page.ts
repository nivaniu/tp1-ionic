import { Component, OnInit } from '@angular/core';
import {PageInfo} from '../../modules/cathegory-info.module';
import {PageProviderService} from '../../services/pages/page-provider.service';

@Component({
  selector: 'app-network-software',
  templateUrl: './network-software.page.html',
  styleUrls: ['./network-software.page.scss'],
})
export class NetworkSoftwarePage implements OnInit {
  pages: PageInfo;

  constructor(private pageProviderService: PageProviderService) {
 }

  ngOnInit() {
    this.pages = this.pageProviderService.getNetSoftWareInfo();
  }

}
