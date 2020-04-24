import { Component, OnInit } from '@angular/core';
import {PageInfo} from '../../modules/cathegory-info.module';
import {PageProviderService} from '../../services/pages/page-provider.service';

@Component({
  selector: 'app-beginner',
  templateUrl: './beginner.page.html',
  styleUrls: ['./beginner.page.scss'],
})
export class BeginnerPage implements OnInit {
  pages: PageInfo;
  constructor(private pageProviderService: PageProviderService) {
  }

  ngOnInit() {
    this.pages = this.pageProviderService.getLangBeginner();
  }

}
