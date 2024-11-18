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
import { SidebarComponent } from './components/checkout/sidebar/sidebar.component'
import { ConfirmationModalComponent } from './components/common/confirmation-modal/confirmation-modal.component'
import { MaterialModule } from './material/material.module'
import { LibraryViewComponent } from './views/library-view/library-view.component';
import { CheckoutViewComponent } from './views/checkout-view/checkout-view.component'

@NgModule({
  declarations: [
    AppComponent,
    BookDetailComponent,
    CheckoutComponent,
    BooksTableComponent,
    SidebarComponent,
    CheckoutDetailComponent,
    CheckoutFormComponent,
    ConfirmationModalComponent,
    LibraryViewComponent,
    AddBookModalComponent,
    CheckoutViewComponent
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
