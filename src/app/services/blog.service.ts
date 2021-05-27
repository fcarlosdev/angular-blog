import { NotificationService } from './notification.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { User } from './../../models/user';
import { Post } from './../../models/post';
import { Tag } from 'src/models/tag';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private BASE_URL = "http://localhost:5000";

  private user = new Subject<User>()

  constructor(private http: HttpClient,
    private router: Router,
    private notifyService: NotificationService) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getUser$():Observable<User> {
    return this.user.asObservable();
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.BASE_URL}/posts?_expand=user&_sort=id&_order=desc`);
  }

  getUser(id): Observable<User> {
    return this.http.get<User>(`${this.BASE_URL}/users/${id}`);
  }

  getUserByEmail(email: string): Observable<User> {
    return this.http.get<User>(this.BASE_URL.concat("/users?q=").concat(email));
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

  signUp(user: User): Observable<User> {
    return this.http.post<User>(`${this.BASE_URL}/users`, JSON.stringify(user), this.httpHeader)
      .pipe(
        retry(1),
        catchError(this.httpError)
      )
  }

  login(email:string, password:string) {
    this.getUserByEmail(email).subscribe(res => {
      if (res && res[0].password == password) {
        this.user.next(res[0])
        this.saveUserSession(res[0])
        this.router.navigateByUrl("/");
      } else {
        this.notifyService.showErrorMessage("Wrong user or password", "Log In")
      }
    }, (error) => {
      this.notifyService.showErrorMessage(error.message, "Log In")
    })
  }


  logout(): void {
    localStorage.removeItem("logged");
  }

  isLogged(): boolean {
    return localStorage.getItem("logged") != null;
  }

  getLoggedUser() {
    return JSON.parse(localStorage.getItem("logged"));
  }

  private saveUserSession(user:any) {
    localStorage.setItem("logged", JSON.stringify(user));
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
    return throwError(msg);
  }


}
