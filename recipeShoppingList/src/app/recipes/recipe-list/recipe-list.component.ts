import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is a test', 'https://img.icons8.com/cotton/2x/circled-down--v2.png'),
    new Recipe('A SECOND recipe', 'just filling description space', 'https://cdn.pixabay.com/photo/2015/06/05/10/35/dishes-798316_1280.png')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
