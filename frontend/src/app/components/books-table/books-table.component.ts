import { Component, OnInit, ViewChild } from '@angular/core'
import { MatPaginator, PageEvent } from '@angular/material/paginator'
import { MatSort, Sort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { Observable } from 'rxjs'
import { Book } from '../../models/book'
import { Page } from '../../models/page'
import { BookService } from '../../services/book.service'

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.scss'],
})
export class BooksTableComponent implements OnInit {
  books$!: Observable<Page<Book>>;
  dataSource: MatTableDataSource<Book>;
  displayedColumns: string[] = ['title', 'author', 'genre', 'year'];
  length: number;
  pageIndex: number;
  pageSize: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(
    private bookService: BookService,
  ) {
  }

  handlePageChange(e: PageEvent) {
    this.bookService
    .getBooks({
      pageIndex: e.pageIndex,
      pageSize: e.pageSize
    })
    .subscribe((data) => {
      this.pageIndex = e.pageIndex;
      this.pageSize = e.pageSize;
      this.dataSource = new MatTableDataSource(data.content);
    })
  }

  sortBooks(sortEvent: Sort) {
    this.bookService
    .getBooks({
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
      sort: sortEvent.active,
      direction: sortEvent.direction
    })
    .subscribe((data) => {
      this.pageIndex,
      this.pageSize,
      this.dataSource = new MatTableDataSource(data.content)
    })
  }

  ngOnInit(): void {
    // TODO this observable should emit books taking into consideration pagination, sorting and filtering options.
    this.books$ = this.bookService.getBooks({});
    this.books$.subscribe((booksPage) => {
      this.pageIndex = booksPage.number;
      this.length = booksPage.totalElements;
      this.dataSource = new MatTableDataSource(booksPage.content);
      this.dataSource.paginator = this.paginator;
    })
  }

}
