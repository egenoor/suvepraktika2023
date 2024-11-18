import { Component } from '@angular/core'
import { Checkout } from 'src/app/models/checkout'
import { CheckoutService } from 'src/app/services/checkout.service'

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent {

  newCheckoutDetails: Checkout;

  constructor(
    private checkoutService: CheckoutService,
  ) {
  }

  updateCheckout() {
    this.checkoutService.updateCheckout(this.newCheckoutDetails).subscribe()
  }
}
