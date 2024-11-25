import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { AddBookModalComponent } from 'src/app/components/add-book-modal/add-book-modal.component'

@Component({
  selector: 'app-library-view',
  templateUrl: './library-view.component.html',
  styleUrls: ['./library-view.component.css']
})
export class LibraryViewComponent {
  checkoutBook = false;
  constructor(public dialog: MatDialog,){}

  openNewBookModal() {
    this.dialog.open(AddBookModalComponent, {});
  }
}
