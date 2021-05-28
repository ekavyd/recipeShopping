import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipeId: number;
  editMode = false;
  recipeSub: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipeSub = this.route.params.subscribe((params: Params) => {
      this.recipeId = +params['id'];
      this.editMode = params['id'] != null;
    })
  }

}
