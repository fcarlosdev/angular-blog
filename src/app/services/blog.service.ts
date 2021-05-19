import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Post } from './../../models/post';
import { Author } from 'src/models/author';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private BASE_URL = "http://localhost:5000";

  constructor(private http: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.BASE_URL}/posts?_expand=author&_sort=id&_order=desc`);
  }

  getAuthor(id): Observable<Author> {
    return this.http.get<Author>(`${this.BASE_URL}/authors/${id}`);
  }

  create(newPost: Post): Observable<Post> {
    return this.http.post<Post>(`${this.BASE_URL}/posts`, JSON.stringify(newPost), this.httpHeader)
      .pipe(
        retry(1),
        catchError(this.httpError)
      );
  }


  private httpError(error) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }



}
