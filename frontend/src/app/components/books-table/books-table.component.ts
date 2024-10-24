import { CommonModule } from '@angular/common'
import { Component, OnInit, ViewChild } from '@angular/core'
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator'
import { MatTableDataSource, MatTableModule } from '@angular/material/table'
import { Observable } from 'rxjs'
import { Book } from '../../models/book'
import { Page } from '../../models/page'
import { BookService } from '../../services/book.service'

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.scss'],
  standalone: true,
  imports: [MatTableModule, CommonModule, MatPaginatorModule]
})
export class BooksTableComponent implements OnInit {
  books$!: Observable<Page<Book>>;
  dataSource: MatTableDataSource<Book>;
  displayedColumns: string[] = ['title', 'author', 'genre', 'year'];
  length: number;
  pageIndex: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(
    private bookService: BookService,
  ) {
  }

  handlePageChange(e: PageEvent) {
    this.bookService.getBooks({pageIndex: e.pageIndex, pageSize: e.pageSize}).subscribe((data) => {
      this.pageIndex = data.number
      this.dataSource = new MatTableDataSource(data.content);
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
