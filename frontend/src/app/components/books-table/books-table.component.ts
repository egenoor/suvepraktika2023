import { Component, Input, OnInit, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'
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
  styleUrls: ['./books-table.component.css'],
})
export class BooksTableComponent implements OnInit {
  books$!: Observable<Page<Book>>;
  dataSource: MatTableDataSource<Book>;
  books: Book[] = [];
  displayedColumns: string[] = ['title', 'author', 'genre', 'year', 'status', 'checkoutcount'];
  length: number;
  pageIndex: number;
  pageSize: number;
  searchField = "";
  selectedStatus = "";

  @Input() checkoutBook: boolean;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(
    private bookService: BookService,
  ) {}

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
      this.dataSource = new MatTableDataSource(data.content)
    })
  }

  searchBooks(form: NgForm) {
    this.dataSource = new MatTableDataSource(this.books.filter((book) => {
      return book.title.includes(form.value.searchField)
    }));
  }

  filterByStatus() {
    this.dataSource = new MatTableDataSource(this.books.filter((book) => {
      if (this.selectedStatus === "ALL") {
        return true;
      }
      return book.status === this.selectedStatus;
    }))
  }

  ngOnInit(): void {
    this.books$ = this.bookService.getBooks({});
    this.books$.subscribe((booksPage) => {
      this.pageIndex = booksPage.number;
      this.length = booksPage.totalElements;
      this.dataSource = new MatTableDataSource(booksPage.content);
      this.dataSource.paginator = this.paginator;
      this.books = booksPage.content;
    })
  }

}
