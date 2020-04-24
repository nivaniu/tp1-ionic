import { Component, OnInit } from '@angular/core';
import {PageProviderService} from '../../services/pages/page-provider.service';
import {PageInfo} from '../../modules/cathegory-info.module';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.page.html',
  styleUrls: ['./skills.page.scss'],
})
export class SkillsPage implements OnInit {
  pages: PageInfo;
  constructor(private PageProvider: PageProviderService) { }

  ngOnInit() {
    this.pages = this.PageProvider.getSkillsInfo();
  }

}
