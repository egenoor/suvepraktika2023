import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BookDetailComponent } from './components/book-detail/book-detail.component'
import { BooksTableComponent } from './components/books-table/books-table.component'
import { CheckoutComponent } from './components/checkout/checkout.component'
import { SidebarComponent } from './components/checkout/sidebar/sidebar.component'
import { MaterialModule } from './material/material.module';
import { CheckoutDetailComponent } from './components/checkout/checkout-detail/checkout-detail.component';
import { CheckoutFormComponent } from './components/checkout/checkout-form/checkout-form.component';
import { BookFormComponent } from './components/books-table/book-form/book-form.component'

@NgModule({
  declarations: [
    AppComponent,
    BookDetailComponent,
    CheckoutComponent,
    BooksTableComponent,
    SidebarComponent,
    CheckoutDetailComponent,
    CheckoutFormComponent,
    BookFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
