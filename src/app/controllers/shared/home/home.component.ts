import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @HostBinding('class') parentClass = 'row col-md-12';
  constructor() { }

  ngOnInit() {
  }

}
