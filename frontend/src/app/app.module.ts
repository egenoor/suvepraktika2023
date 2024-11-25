import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AddBookModalComponent } from './components/add-book-modal/add-book-modal.component'
import { BookDetailComponent } from './components/books-table/book-detail/book-detail.component'
import { BooksTableComponent } from './components/books-table/books-table.component'
import { CheckoutDetailComponent } from './components/checkout/checkout-detail/checkout-detail.component'
import { CheckoutFormComponent } from './components/checkout/checkout-form/checkout-form.component'
import { CheckoutComponent } from './components/checkout/checkout.component'
import { ConfirmationModalComponent } from './components/common/confirmation-modal/confirmation-modal.component'
import { LateCheckoutsTableComponent } from './components/late-checkouts-table/late-checkouts-table.component'
import { MaterialModule } from './material/material.module'
import { CheckoutViewComponent } from './views/checkout-view/checkout-view.component'
import { LateCheckoutViewComponent } from './views/late-checkout-view/late-checkout-view.component'
import { LibraryViewComponent } from './views/library-view/library-view.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ReturnBookModalComponent } from './components/return-book-modal/return-book-modal.component'

@NgModule({
  declarations: [
    AppComponent,
    BookDetailComponent,
    CheckoutComponent,
    BooksTableComponent,
    CheckoutDetailComponent,
    CheckoutFormComponent,
    ConfirmationModalComponent,
    LibraryViewComponent,
    AddBookModalComponent,
    CheckoutViewComponent,
    LateCheckoutViewComponent,
    LateCheckoutsTableComponent,
    FavoritesComponent,
    SignupComponent,
    LoginComponent,
    ReturnBookModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    {provide: DATE_PIPE_DEFAULT_OPTIONS, useValue: {dateFormat: "dd/MM/yyyy"}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
