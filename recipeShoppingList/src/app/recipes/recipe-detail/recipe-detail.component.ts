import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../shared/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeItem : Recipe = null;
  recipeId: number;
  recipeInSub: Subscription;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //const id = this.route.snapshot.params['id'];
    this.recipeInSub = this.route.params.subscribe( (params: Params) => {
      this.recipeId = +params['id'];
      this.recipeItem = this.recipeService.getRecipe(this.recipeId);
    })
  }

  addToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipeItem.ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['edit'], { relativeTo: this.route });
    //this.router.navigate(['../', this.recipeId, 'edit'], { relativeTo: this.route });
  }

}
