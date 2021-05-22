import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { User } from './../../models/user';
import { Post } from './../../models/post';
import { Tag } from 'src/models/tag';


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
    return this.http.get<Post[]>(`${this.BASE_URL}/posts?_expand=user&_sort=id&_order=desc`);
  }

  getUser(id): Observable<User> {
    return this.http.get<User>(`${this.BASE_URL}/users/${id}`);
  }

  create(newPost: Post): Observable<Post> {
    return this.http.post<Post>(`${this.BASE_URL}/posts`, JSON.stringify(newPost), this.httpHeader)
      .pipe(
        retry(1),
        catchError(this.httpError)
      );
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(`${this.BASE_URL}/tags`);
  }

  getTag(id): Observable<Tag> {
    return this.http.get<Tag>(`${this.BASE_URL}/tags/${id}`);
  }

  addLike(post: Post): Observable<Post> {
    return this.http.patch<Post>(`${this.BASE_URL}/posts/${post.id}`, JSON.stringify(post), this.httpHeader)
      .pipe(
        retry(1),
        catchError(this.httpError)
      );
  }

  public signUp(user: User): Observable<User> {
    return this.http.post<User>(`${this.BASE_URL}/users`, JSON.stringify(user), this.httpHeader)
      .pipe(
        retry(1),
        catchError(this.httpError)
      )
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
