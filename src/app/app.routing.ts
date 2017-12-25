import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipeBookComponent } from "./recipe-book/recipe-book.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeStartComponent } from "./recipe-book/start/start.component";
import { RecipeListComponent } from "./recipe-book/list/list.component";
import { RecipeItemComponent } from "./recipe-book/item/item.component";
import { RecipeDetailComponent } from "./recipe-book/detail/detail.component";
import { ShoppingEditComponent } from "./shopping-list/edit/edit.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipe', pathMatch: 'full' },
    { path: 'recipe', component: RecipeBookComponent, children: [
        { path: '', component: RecipeStartComponent },
        { path: ':id', component: RecipeDetailComponent }
    ] },
    { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}