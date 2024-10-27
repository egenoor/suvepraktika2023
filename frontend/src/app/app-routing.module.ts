import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
// import { BooksListComponent } from './components/books-list/books-list.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component'
import { BooksTableComponent } from './components/books-table/books-table.component'
import { CheckoutComponent } from './components/checkout/checkout.component'

const routes: Routes = [
  {path: '', redirectTo: 'books', pathMatch: 'full'},
  {path: 'books', component: BooksTableComponent},
  {path: 'books/:id', component: BookDetailComponent},
  {path: 'checkout', component: CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
