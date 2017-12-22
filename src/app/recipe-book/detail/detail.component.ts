import { Component, Input, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'recipe-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  addToShoppingList() {
    this.recipeService.addToShoppingList(this.recipe.ingredients);
  }
}
