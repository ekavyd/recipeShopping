import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../../shared/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef; 
  @ViewChild('amountInput') amountInputRef: ElementRef; 
  //@Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }
  
  onAddItem(){
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    this.slService.addIngredient(newIngredient);
    
  }

}
