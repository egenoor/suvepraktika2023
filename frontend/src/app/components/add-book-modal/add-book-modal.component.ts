import { Component, Inject, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { Observable } from 'rxjs'
import { NewBookData } from 'src/app/models/new-book-data'
import { BookService } from 'src/app/services/book.service'
import { AddBookBody } from 'src/app/types/interfaces/add-book-body'

@Component({
  selector: 'app-add-book-modal',
  templateUrl: './add-book-modal.component.html',
  styleUrls: ['./add-book-modal.component.css']
})
export class AddBookModalComponent implements OnInit {
  selectedGenre = "";
  genres$: Observable<string[]>;

  constructor(
    public dialogRef: MatDialogRef<AddBookModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: NewBookData,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.genres$ = this.bookService.getBookGenres();
  }

  addBook(form: NgForm) {
    const addBookFormBody: AddBookBody = {
      title: form.value.title,
      author: form.value.author,
      genre: form.value.genre,
      year: form.value.year.getFullYear(),
      added: new Date()
    }
    this.bookService.saveBook(addBookFormBody).subscribe()
    this.closeModal();
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
