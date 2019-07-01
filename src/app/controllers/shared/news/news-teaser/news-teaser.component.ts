import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'app-news-teaser',
  templateUrl: './news-teaser.component.html',
  styleUrls: ['./news-teaser.component.css']
})
export class NewsTeaserComponent {
  @Input() newsItem: any;

  constructor() {
  }

}
