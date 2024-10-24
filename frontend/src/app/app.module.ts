import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BookDetailComponent } from './components/book-detail/book-detail.component'
// import { BooksListComponent } from './components/books-list/books-list.component'
import { BooksTableComponent } from './components/books-table/books-table.component'
import { MaterialModule } from './material/material.module'

@NgModule({
  declarations: [
    AppComponent,
    // BooksListComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    BooksTableComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
