import { Component, OnInit } from '@angular/core';
import {PageInfo} from '../../modules/cathegory-info.module';
import {PageProviderService} from '../../services/pages/page-provider.service';

@Component({
  selector: 'app-professional-experience',
  templateUrl: './professional-experience.page.html',
  styleUrls: ['./professional-experience.page.scss'],
})
export class ProfessionalExperiencePage implements OnInit {
  pages: PageInfo;
  constructor(private pageProviderService: PageProviderService) {
  }

  ngOnInit() {
    this.pages = this.pageProviderService.getProfInfo();
  }

}
