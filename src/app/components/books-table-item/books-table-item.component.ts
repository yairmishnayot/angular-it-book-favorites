import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from "../../Interfaces/Book";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-books-table-item',
  templateUrl: './books-table-item.component.html',
  styleUrls: ['./books-table-item.component.scss']
})
export class BooksTableItemComponent {
  constructor(private http: HttpClient) {
  }
  @Input() book: Book | undefined
  @Input() isFavorite: boolean = false
  @Output() delete = new EventEmitter()

  addToFavorites(book: Book | undefined){
    this.http.post('http://localhost:5000/books', book).subscribe((res)=>{
      console.log(res);
    })
  }

  onDelete(book: Book | undefined){
    this.delete.emit(book);
  }
}
