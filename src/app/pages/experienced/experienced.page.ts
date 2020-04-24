import { Component, OnInit } from '@angular/core';
import {PageProviderService} from '../../services/pages/page-provider.service';
import {PageInfo} from '../../modules/cathegory-info.module';

@Component({
  selector: 'app-experienced',
  templateUrl: './experienced.page.html',
  styleUrls: ['./experienced.page.scss'],
})
export class ExperiencedPage implements OnInit {
  pages: PageInfo;
  constructor(private pageProviderService: PageProviderService) { }

  ngOnInit() {
    this.pages = this.pageProviderService.getDevExpInfo();
  }

}
