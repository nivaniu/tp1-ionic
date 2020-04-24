import { Component, OnInit } from '@angular/core';
import {PageInfo} from '../../modules/cathegory-info.module';
import {PageProviderService} from '../../services/pages/page-provider.service';

@Component({
  selector: 'app-personal-interests',
  templateUrl: './personal-interests.page.html',
  styleUrls: ['./personal-interests.page.scss'],
})
export class PersonalInterestsPage implements OnInit {
  pages: PageInfo;
  constructor(private pageProviderService: PageProviderService) {
  }

  ngOnInit() {
    this.pages = this.pageProviderService.getPersIntInfo();
  }

}
