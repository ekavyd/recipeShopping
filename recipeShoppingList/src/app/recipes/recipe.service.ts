import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Burger and Fries', 
                    'Arbys burger and fries combo', 
                    'https://cdn.localdatacdn.com/va/chesapeake/261381/original/AzPmOqxf2S.jpg',
                    [
                        new Ingredient('Meat', 1),
                        new Ingredient('Bun', 1)
                    ]),
        new Recipe('Ribs', 
                    'Babyback ribs with fries and coleslaw on the side', 
                    'https://i0.hippopx.com/photos/120/420/848/food-lip-delicious-food-preview.jpg',
                    [
                        new Ingredient('Ribs', 1),
                        new Ingredient('Coleslaw', 1),
                        new Ingredient('Fries', 20)
                    ])
    ];

    constructor(private slService: ShoppingListService){}
    


    getRecipes(){
        //calling slice w/o args returns a copy of the array
       return this.recipes.slice();
    }

    getRecipe(id: number){
        //calling slice w/o args returns a copy of the array
       return this.recipes.slice()[id];
    }

    // getRecipes(){
    //     //calling slice w/o args returns a copy of the array
    //    return this.recipes.slice();
    // }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);

    }
}