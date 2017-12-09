import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'recipe-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      "Nasi lemak",
      "Makanan kegemaran rakyat Malaysia",
      "https://upload.wikimedia.org/wikipedia/commons/6/62/Nasi_Lemak%2C_Mamak%2C_Sydney.jpg"
    ),
    new Recipe(
      "Roti Canai",
      "Tebar terbang",
      "https://c1.staticflickr.com/4/3081/4553382417_9ddb5531fa_b.jpg"
    )
  ];
}
