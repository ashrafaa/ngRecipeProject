import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'recipe-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  onChosenRecipe() {
    this.recipeSelected.emit();
  }
}
