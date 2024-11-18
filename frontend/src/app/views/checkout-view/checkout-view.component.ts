import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { AddBookModalComponent } from 'src/app/components/add-book-modal/add-book-modal.component'

@Component({
  selector: 'app-checkout-view',
  templateUrl: './checkout-view.component.html',
  styleUrls: ['./checkout-view.component.css']
})
export class CheckoutViewComponent {
  constructor(public dialog: MatDialog,){}
  
  openNewBookModal() {
    this.dialog.open(AddBookModalComponent, {

    })
  }
}
