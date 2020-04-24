import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.module';
import {RecipesService} from './recipes.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[];
  constructor(
      private recipesService: RecipesService,
      private route: ActivatedRoute) {
    route.params.subscribe(val => {
      this.recipes = this.recipesService.getAllRecipes();
    });
  }
  ngOnInit() {
  }

}
