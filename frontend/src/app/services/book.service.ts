import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Book } from '../models/book'
import { Page, PageRequest } from '../models/page'
import { AddBookBody } from '../types/interfaces/add-book-body'
import { RestUtil } from './rest-util'

@Injectable({
  providedIn: 'root'
})

export class BookService {

  private readonly baseUrl = environment.backendUrl + '/api/book';

  constructor(
    private http: HttpClient,
  ) {
  }

  getBooks(filter: Partial<PageRequest>): Observable<Page<Book>> {
    const url = this.baseUrl + '/getBooks';
    const params = RestUtil.buildParamsFromPageRequest(filter);
    return this.http.get<Page<Book>>(url, {params});
  }

  getBookGenres(): Observable<string[]> {
    const url = this.baseUrl + '/getBookGenres';
    return this.http.get<string[]>(url);
  }

  getBook(bookId: string): Observable<Book> {
    const url = this.baseUrl + '/getBook';
    const params = new HttpParams().set('bookId', bookId);
    return this.http.get<Book>(url, {params});
  }

  saveBook(book: AddBookBody): Observable<void> {
    const url = this.baseUrl + '/saveBook';
    return this.http.post<void>(url, book);
  }

  updateBook(book: Book): Observable<void> {
    const url = this.baseUrl + '/updateBook';
    return this.http.post<void>(url, book);
  }

  deleteBook(bookId: string): Observable<void> {
    const url = this.baseUrl + '/deleteBook';
    const params = new HttpParams().set('bookId', bookId);
    return this.http.delete<void>(url, {params});
  }

}
