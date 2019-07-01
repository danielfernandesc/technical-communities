import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class NewsService {
  private url = "http://localhost:3000";

  constructor(private http: HttpClient) {}

   getNews(){
    return this.http.get(this.url + "/news");
  }

  getNewsById(id) {
    return this.http.get(this.url + "/news/" + id);
  }
}
