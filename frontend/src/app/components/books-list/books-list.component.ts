import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Book } from '../../models/book'
import { Page } from '../../models/page'
import { BookService } from '../../services/book.service'

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit {
  books$!: Observable<Page<Book>>;

  constructor(
    private bookService: BookService,
  ) {
  }

  ngOnInit(): void {
    // TODO this observable should emit books taking into consideration pagination, sorting and filtering options.
    this.books$ = this.bookService.getBooks({});

  }

}
