import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { ActivatedRoute } from '@angular/router'
import { map, Observable, switchMap } from 'rxjs'
import { Checkout } from 'src/app/models/checkout'
import { CheckoutService } from 'src/app/services/checkout.service'
import { ConfirmationModalComponent } from '../../common/confirmation-modal/confirmation-modal.component'

@Component({
  selector: 'app-checkout-detail',
  templateUrl: './checkout-detail.component.html',
  styleUrls: ['./checkout-detail.component.css']
})
export class CheckoutDetailComponent implements OnInit{
  checkout$!: Observable<Checkout>;
  checkoutDetails: Checkout;
  editCheckout = false;
  newCheckoutDetails: Checkout;

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private checkoutService: CheckoutService,
  ) {
  }

  ngOnInit(): void {
    this.route.params
      .pipe(map(params => params['id']))
      .pipe(switchMap(id => this.checkoutService.getCheckout(id)))
      .subscribe(checkout => this.checkoutDetails = checkout);
  }

  openDeleteDialog(): void {
    this.dialog.open(ConfirmationModalComponent, {
      data: {
        confirmationTitle: "Delete book",
        confirmationMessage: "Are you sure you want to delete this book?",
        onConfirmation: this.deleteCheckout.bind(this)
      }
    });
  }

  deleteCheckout() {
    this.checkoutService.deleteCheckout(this.checkoutDetails.id).subscribe();
  }


}
