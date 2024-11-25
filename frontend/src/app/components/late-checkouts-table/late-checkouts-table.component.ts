import { Component, OnInit, ViewChild } from '@angular/core'
import { MatPaginator, PageEvent } from '@angular/material/paginator'
import { MatSort, Sort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { Checkout } from 'src/app/models/checkout'
import { CheckoutService } from 'src/app/services/checkout.service'

@Component({
  selector: 'app-late-checkouts-table',
  templateUrl: './late-checkouts-table.component.html',
  styleUrls: ['./late-checkouts-table.component.css']
})
export class LateCheckoutsTableComponent implements OnInit {
  dataSource: MatTableDataSource<Checkout>;
  displayedColumns: string[] = [
    'borrowedBook',
    'borrowerFirstName',
    'borrowerLastName',
    'checkedOutDate',
    'dueDate'
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
      this.dataSource = new MatTableDataSource(data.content)
    })
  }

  ngOnInit(): void {
    this.checkoutService.getCheckouts({
      pageIndex: 0,
      pageSize: 10000
    }).subscribe((checkoutPage) => {
      this.pageIndex = checkoutPage.number;
      this.length = checkoutPage.totalElements;
      const filteredContent = checkoutPage.content.filter((checkout) => {
        return new Date(checkout.dueDate).getTime() <= new Date().getTime();
      });
      this.dataSource = new MatTableDataSource(filteredContent);
      this.dataSource.paginator = this.paginator;
    })
  }
}
