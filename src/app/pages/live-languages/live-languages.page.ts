import { Component, OnInit } from '@angular/core';
import {PageInfo} from '../../modules/cathegory-info.module';
import {PageProviderService} from '../../services/pages/page-provider.service';

@Component({
  selector: 'app-live-languages',
  templateUrl: './live-languages.page.html',
  styleUrls: ['./live-languages.page.scss'],
})
export class LiveLanguagesPage implements OnInit {
  pages: PageInfo;
  constructor(private pageProviderService: PageProviderService) {
  }

  ngOnInit() {
    this.pages = this.pageProviderService.getLangInfo();
  }

}
