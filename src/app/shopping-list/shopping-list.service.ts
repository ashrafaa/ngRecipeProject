import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  private ingredient = [
    new Ingredient('Apple', '6'),
    new Ingredient('Egg', '12')
  ];

  getIngredient() {
    return this.ingredient.slice();
  }
}
