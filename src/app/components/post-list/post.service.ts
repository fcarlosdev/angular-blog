import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Post } from '../../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private BASE_URL = "http://localhost:8080/api/v1/blog";
  
  constructor(private httpClient: HttpClient) {}

  public listAll():Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.BASE_URL.concat("/posts/all"));
  }
}
