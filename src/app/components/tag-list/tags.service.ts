import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tag } from 'src/app/models/tag';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  private BASE_URL = "http://localhost:8080/api/v1/blog";

  constructor(private httpClient: HttpClient) { }

  listAll():Observable<Tag[]> {
    return this.httpClient.get<Tag[]>(this.BASE_URL.concat("/tags/all"));
  }
}
