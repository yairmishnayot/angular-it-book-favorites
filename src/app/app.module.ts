import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BooksComponent } from './pages/books/books.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import {HttpClientModule} from "@angular/common/http";
import { BookComponent } from './components/book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BooksComponent,
    FavoritesComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
