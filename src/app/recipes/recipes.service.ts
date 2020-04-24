import {Injectable} from '@angular/core';
import {Recipe} from './recipe.module';

@Injectable({
    providedIn: 'root'
})
export class RecipesService {
    private recipes: Recipe[] = [
        {
            id: 'r1',
            title: 'Schnitzel',
            imageUrl: 'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg',
            ingredients: ['French Fries', 'Pork Meat', 'Salad']
        },
        {
            id: 'r2',
            title: 'Spaghetti',
            imageUrl: 'https://img-3.journaldesfemmes.fr/dBJkjXynmzyOfU0hSHidIYviS3s=/748x499/smart/f4c3d2e143204f238b39a6bfa75a60d5/recipe-jdf/394271.jpg',
            ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
        }
    ];

    constructor() {
    }

    public getAllRecipes() {
        return [...this.recipes];
    }

    getRecipe(recipeId: string) {
        return {...this.recipes.find(recipe => recipe.id === recipeId)};
    }

    deleteRecipe(recipeId: string) {
        console.log(this.recipes);
        this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
        console.log(this.recipes);
    }
}
