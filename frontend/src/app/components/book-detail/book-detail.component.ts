import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'
import { map, switchMap } from 'rxjs/operators'
import { Book } from '../../models/book'
import { BookService } from '../../services/book.service'

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book$!: Observable<Book>;
  bookDetails: Book;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
  ) {
  }

  ngOnInit(): void {
    this.route.params
      .pipe(map(params => params['id']))
      .pipe(switchMap(id => this.bookService.getBook(id)))
      .subscribe(book => this.bookDetails = book);
  }

  addToCheckout() {
    const checkoutLS: Book[] = JSON.parse(localStorage.getItem("checkout") || "[]");
    checkoutLS.push(this.bookDetails);
    localStorage.setItem("checkout", JSON.stringify(checkoutLS));
  }
}
