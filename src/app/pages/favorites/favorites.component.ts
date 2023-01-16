import { Component } from '@angular/core';
import {Book} from "../../Interfaces/Book";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  favorites: Book[]

  constructor(private http: HttpClient) {
    this.favorites = [];
  }

  ngOnInit() {
    this.http.get('http://localhost:5000/books').subscribe((res: any) => {
      this.favorites = res
    })
  }

  deleteFavorite(favorite: Book | undefined){
    this.http.delete(`http://localhost:5000/books/${favorite?.id}`).subscribe(() => {
      this.favorites = this.favorites.filter(f => f.id !== favorite?.id);
    })
  }
}
