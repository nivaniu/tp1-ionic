import { Component, OnInit } from '@angular/core';
import {PageInfo} from '../../modules/cathegory-info.module';
import {PageProviderService} from '../../services/pages/page-provider.service';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.page.html',
  styleUrls: ['./advanced.page.scss'],
})
export class AdvancedPage implements OnInit {
  pages: PageInfo;

  constructor(private pageProviderService: PageProviderService) {
  }

  ngOnInit() {
    this.pages = this.pageProviderService.getLangAdvanced();
  }

}
