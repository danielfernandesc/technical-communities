import {Component, HostBinding, OnInit} from '@angular/core';
import {EventsService} from "../../../services/events.service";
import {TechnologiesService} from "../../../services/technologies.service";
import {EventsTypesService} from "../../../services/eventstypes.services";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [EventsService, TechnologiesService, EventsTypesService]
})
export class EventsComponent implements OnInit {
  @HostBinding('class') parentClass = 'row';
  eventsList; technologies; eventsTypes: any;

  constructor(private eventsTypeService: EventsTypesService, private eventsService : EventsService, private technologiesService: TechnologiesService) {}

  ngOnInit() {
    this.technologiesService.getTechnologies().subscribe(data => {
      this.technologies = data;
      this.eventsTypeService.getEventTypes().subscribe(data => {
        this.eventsTypes = data;
        this.eventsService.getEvents().subscribe(data => {
          this.eventsList = data;
      });
    });
    })
  }
}
