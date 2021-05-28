import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Tomato', 5),
        new Ingredient('Apple', 10)
      ];

      getIngredients(){
        return this.ingredients.slice();
      }


      addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }

      // removeIngredient(ingredient: Ingredient){
      //   let index = this.ingredients.findIndex(x => x.name == ingredient.name);
      //   this.ingredients = this.ingredients.slice(index, 1);
      // }

      // onClearIngredients(){
      //   this.ingredients.length = 0;
      // }
}