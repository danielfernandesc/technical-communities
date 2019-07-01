import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class TechnologiesService {
  private url = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  getTechnologies(){
    return this.http.get(this.url + "/technologies");
  }

}
