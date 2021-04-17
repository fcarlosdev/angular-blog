import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Author } from './../models/author';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private BASE_URL = "http://localhost:8080/api/v1/blog";

  constructor(
    private http: HttpClient,
    private router: Router) { }

  saveAuthor(newAuthor: Author): Observable<any> {
    return this.http.post(this.BASE_URL.concat("/authors/new"), newAuthor);
  }

  public isUserLogged():boolean {
    return localStorage.getItem('userLogged') !== null;
  }

  registerUser() {
    localStorage.setItem('userLogged',JSON.stringify(true));
  }

  userLogout(){
    localStorage.removeItem('userLogged');
    this.router.navigateByUrl("/");
  }




}
