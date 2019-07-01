import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class EventsTypesService {
  private url = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  getEventTypes(){
    return this.http.get(this.url + "/eventsTypes");
  }

}
