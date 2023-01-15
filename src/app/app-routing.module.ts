import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BooksComponent} from "./pages/books/books.component";
import {FavoritesComponent} from "./pages/favorites/favorites.component";

const routes: Routes = [
  {path: '', component: BooksComponent},
  {path: 'favorites', component: FavoritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
