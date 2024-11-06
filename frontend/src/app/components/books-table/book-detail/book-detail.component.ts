import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'
import { map, switchMap } from 'rxjs/operators'
import { Book } from '../../../models/book'
import { BookService } from '../../../services/book.service'
import { ConfirmationModalComponent } from '../../common/confirmation-modal/confirmation-modal.component'

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book$!: Observable<Book>;
  bookDetails: Book;

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private bookService: BookService,
  ) {}

  openDialog(): void {
    this.dialog.open(ConfirmationModalComponent, {
      data: {
        confirmationTitle: "Delete book",
        confirmationMessage: "Are you sure you want to delete this book?",
        onConfirmation: this.deleteBook.bind(this)
      }
    });
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

  deleteBook() {
    this.bookService.deleteBook(this.bookDetails.id).subscribe();
  }

  // updateBookDetails() {
  //   this.bookService.updateBook().subscribe()
  // }
}
