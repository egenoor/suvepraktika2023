import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { BookDetailComponent } from './components/books-table/book-detail/book-detail.component'
import { CheckoutDetailComponent } from './components/checkout/checkout-detail/checkout-detail.component'
import { CheckoutViewComponent } from './views/checkout-view/checkout-view.component'
import { LibraryViewComponent } from './views/library-view/library-view.component'

const routes: Routes = [
  {path: '', redirectTo: 'books', pathMatch: 'full'},
  {path: 'books', component: LibraryViewComponent},
  {path: 'books/:id', component: BookDetailComponent},
  {path: 'checkouts', component: CheckoutViewComponent},
  {path: 'checkouts/:id', component: CheckoutDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
