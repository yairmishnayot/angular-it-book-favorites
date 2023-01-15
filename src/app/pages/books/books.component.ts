import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "../../Interfaces/Book";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit{
  books: Book[]
  constructor(private http: HttpClient) {
    this.books = [];
  }

  ngOnInit() {
    this.http.get('https://api.itbook.store/1.0/new').subscribe((res: any) => {
      this.books = res.books
    })
  }
}
