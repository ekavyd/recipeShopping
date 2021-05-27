import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'this is a test', 'https://img.icons8.com/cotton/2x/circled-down--v2.png'),
        new Recipe('A SECOND recipe', 'just filling description space', 'https://cdn.pixabay.com/photo/2015/06/05/10/35/dishes-798316_1280.png')
    ];
    


    getRecipes(){
        //calling slice w/o args returns a copy of the array
       return this.recipes.slice();
    }

    // getRecipes(){
    //     //calling slice w/o args returns a copy of the array
    //    return this.recipes.slice();
    // }
}