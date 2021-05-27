import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipe;
  @Output() recipeSelected = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelect(){
    console.log("recipeItem triggered ")
    this.recipeSelected.emit(this.recipeItem.name);
  }

}
