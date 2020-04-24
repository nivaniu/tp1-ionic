import { Component, OnInit } from '@angular/core';
import {PageInfo} from '../../modules/cathegory-info.module';
import {PageProviderService} from '../../services/pages/page-provider.service';

@Component({
  selector: 'app-frameworks',
  templateUrl: './frameworks.page.html',
  styleUrls: ['./frameworks.page.scss'],
})
export class FrameworksPage implements OnInit {
  pages: PageInfo;

  constructor(private pageProviderService: PageProviderService) {
  }

  ngOnInit() {
    this.pages = this.pageProviderService.getFrameworkInfo();
  }

}
