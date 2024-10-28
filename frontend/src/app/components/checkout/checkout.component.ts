import { Component, OnInit, ViewChild } from '@angular/core'
import { MatPaginator, PageEvent } from '@angular/material/paginator'
import { MatSort, Sort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { Observable } from 'rxjs'
import { Checkout } from 'src/app/models/checkout'
import { CheckoutService } from 'src/app/services/checkout.service'
import { Page } from '../../models/page'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit{
  checkouts$!: Observable<Page<Checkout>>;
  dataSource: MatTableDataSource<Checkout>;
  displayedColumns: string[] = [
    'borrowerFirstName',
    'borrowerLastName',
    'borrowedBook',
    'checkedOutDate',
    'dueDate',
    'returnedDate'
  ];
  length: number;
  pageIndex: number;
  pageSize: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(
    private checkoutService: CheckoutService,
  ) {
  }

  handlePageChange(e: PageEvent) {
    this.checkoutService
    .getCheckouts({
      pageIndex: e.pageIndex,
      pageSize: e.pageSize
    })
    .subscribe((data) => {
      this.pageIndex = e.pageIndex;
      this.pageSize = e.pageSize;
      this.dataSource = new MatTableDataSource(data.content);
    })
  }

  sortCheckouts(sortEvent: Sort) {
    this.checkoutService
    .getCheckouts({
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
      sort: sortEvent.active,
      direction: sortEvent.direction
    })
    .subscribe((data) => {
      this.pageIndex,
      this.pageSize,
      this.dataSource = new MatTableDataSource(data.content)
    })
  }

  ngOnInit(): void {
    this.checkouts$ = this.checkoutService.getCheckouts({});
    this.checkouts$.subscribe((checkoutPage) => {
      this.pageIndex = checkoutPage.number;
      this.length = checkoutPage.totalElements;
      this.dataSource = new MatTableDataSource(checkoutPage.content);
      this.dataSource.paginator = this.paginator;
    })
  }

}