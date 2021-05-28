import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [ RecipeService ]
})
export class RecipesComponent implements OnInit {
  recipeSelected: Recipe = null;
  recipeChangeSub: Subscription;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this. recipeChangeSub = this.recipeService.recipeSelected.subscribe( (recipe: Recipe) => {
      this.recipeSelected = recipe;
    });
  }

}
