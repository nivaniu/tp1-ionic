import { Component, OnInit } from '@angular/core';
import {PageInfo} from '../../modules/cathegory-info.module';
import {PageProviderService} from '../../services/pages/page-provider.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.page.html',
  styleUrls: ['./personal-info.page.scss'],
})
export class PersonalInfoPage implements OnInit {
  pages: PageInfo;
  constructor(private pageProviderService: PageProviderService) {
  }

  ngOnInit() {
    this.pages = this.pageProviderService.getPersInfo();
  }

}
