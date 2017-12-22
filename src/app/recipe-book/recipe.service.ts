import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {  
  recipeSelected = new EventEmitter<Recipe>();

  private recipes = [
    new Recipe(
      "Nasi lemak",
      "Makanan kegemaran rakyat Malaysia",
      "https://upload.wikimedia.org/wikipedia/commons/6/62/Nasi_Lemak%2C_Mamak%2C_Sydney.jpg",
      [
        new Ingredient('Rice', '1 bowl'),
        new Ingredient('Anchovies', '20')
      ]
    ),
    new Recipe(
      "Roti Canai",
      "Tebar terbang",
      "https://c1.staticflickr.com/4/3081/4553382417_9ddb5531fa_b.jpg",
      [
        new Ingredient('Flour', '500g'),
        new Ingredient('Margarine', '150g')
      ]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipe() {
    return this.recipes.slice(); // return copy of array
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.slService.addToIngredients(ingredients);
  }
}
