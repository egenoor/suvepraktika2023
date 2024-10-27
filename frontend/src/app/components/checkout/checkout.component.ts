import { Component, OnInit, ViewChild } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { Book } from 'src/app/models/book'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit{
  checkoutList: Book[];
  dataSource: MatTableDataSource<Book>;
  displayedColumns: string[] = ['title', 'author'];
  length: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.checkoutList = JSON.parse(localStorage.getItem("checkout") || "[]");
    this.dataSource = new MatTableDataSource(this.checkoutList);
  }
}
