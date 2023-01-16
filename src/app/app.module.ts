import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BooksComponent } from './pages/books/books.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import {HttpClientModule} from "@angular/common/http";
import { BooksTableItemComponent } from './components/books-table-item/books-table-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BooksComponent,
    FavoritesComponent,
    BooksTableItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
