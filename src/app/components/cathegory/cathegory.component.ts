import {Component, Input, OnInit} from '@angular/core';
import {PageInfo} from '../../modules/cathegory-info.module';

@Component({
  selector: 'app-cathegory',
  templateUrl: './cathegory.component.html',
  styleUrls: ['./cathegory.component.scss'],
})
export class CathegoryComponent implements OnInit {
  @Input() page: PageInfo;
  constructor() { }

  ngOnInit() {}

}
