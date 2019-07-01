import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class EventsService {
  private url = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  getEvents(){
    return this.http.get(this.url + "/events");
  }

  postEvents(event: any){
    return this.http.post(this.url + "/events", event);

  }
}
