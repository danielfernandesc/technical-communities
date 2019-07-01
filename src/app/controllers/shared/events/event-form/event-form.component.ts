import {Component, HostBinding, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Event} from "../../../../Model/event.model";
import {EventsService} from "../../../../services/events.service";
import {Router} from "@angular/router";
import {TechnologiesService} from "../../../../services/technologies.service";
import {EventsTypesService} from "../../../../services/eventstypes.services";



@Component({
  selector: 'app-event-submit',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css'],
  providers: [TechnologiesService, EventsService, EventsTypesService]
})
export class EventFormComponent {
  @HostBinding('class') parentClass = 'col-md-4';
  event: Event;
  technologies; eventsTypes: any;
  constructor(private eventsTypeService: EventsTypesService, private technologiesService: TechnologiesService, private eventsService: EventsService, private router: Router) {
    this.technologiesService.getTechnologies().subscribe(data => {
      this.technologies = data;
    });
    this.eventsTypeService.getEventTypes().subscribe(data => {
      this.eventsTypes = data;
    });
  }

  form = new FormGroup({
    eventname: new FormControl('', Validators.required),
    categories_selector: new FormControl('', Validators.required),
    descriptionText: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    tech: new FormControl('', Validators.required)
  });

  get eventname() {
    return this.form.get('eventname');
  }

  submitEvent (input: any) {
    this.event = new Event(input.value.eventname, input.value.tech.id, input.value.category.id, input.value.descriptionText);
    this.eventsService.postEvents(this.event).subscribe(res => {
      this.router.navigate(['/events']);
      });

  }

}
