import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { MatTableModule } from '@angular/material/table'
import { Observable } from 'rxjs'
import { Book } from '../../models/book'
import { Page } from '../../models/page'
import { BookService } from '../../services/book.service'

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.scss'],
  standalone: true,
  imports: [MatTableModule, CommonModule]
})
export class BooksTableComponent implements OnInit {
  books$!: Observable<Page<Book>>;
  dataSource = this.books$;
  displayedColumns: string[] = ['title', 'author', 'genre', 'year']

  constructor(
    private bookService: BookService,
  ) {
  }

  ngOnInit(): void {
    // TODO this observable should emit books taking into consideration pagination, sorting and filtering options.
    this.books$ = this.bookService.getBooks({});

  }

}
