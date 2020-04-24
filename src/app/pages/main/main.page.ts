import {Component, OnInit} from '@angular/core';
import {PageInfo} from '../../modules/cathegory-info.module';
import {RecipesService} from '../../recipes/recipes.service';
import {ActivatedRoute} from '@angular/router';
import {PageProviderService} from '../../services/pages/page-provider.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.page.html',
    styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
    public pages: PageInfo[];

    constructor(private pageProviderService: PageProviderService,
                private route: ActivatedRoute) {
        route.params.subscribe(val => {
            console.log(this.pageProviderService.getMainPages());
            console.log(this.pageProviderService.getSkillsInfo());
            console.log(this.pageProviderService.getDevInfo());
            this.pages = this.pageProviderService.getMainPages();
        });
    }

    ngOnInit() {
    }

}
