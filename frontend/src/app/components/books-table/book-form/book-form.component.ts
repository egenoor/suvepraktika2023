import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { BookService } from 'src/app/services/book.service'

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  genres$: Observable<string[]>;
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.genres$ = this.bookService.getBookGenres();
  }
}
