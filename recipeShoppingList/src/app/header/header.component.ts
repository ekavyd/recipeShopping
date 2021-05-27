import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  @Output() recipeSelect = new EventEmitter();
  @Output() cartSelect = new EventEmitter();

  ngOnInit(): void {
  }

  selectRecipe(){
    this.recipeSelect.emit(0);
  }

  selectCart(){
    this.cartSelect.emit(1);
  }

}
