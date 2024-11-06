import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { map, Observable, switchMap } from 'rxjs'
import { Checkout } from 'src/app/models/checkout'
import { CheckoutService } from 'src/app/services/checkout.service'
import { formatDate } from "@angular/common";

@Component({
  selector: 'app-checkout-detail',
  templateUrl: './checkout-detail.component.html',
  styleUrls: ['./checkout-detail.component.css']
})
export class CheckoutDetailComponent implements OnInit{
  checkout$!: Observable<Checkout>;
  checkoutDetails: Checkout;

  constructor(
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
}
