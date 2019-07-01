import {Component, Input, OnInit} from '@angular/core';
import {NewsService} from "../../../../services/news.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css'],
  providers: [NewsService]
})
export class NewsPageComponent implements OnInit {
  news: any;

  constructor(private newsService : NewsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
   this.route.params.subscribe(param => {
     this.newsService.getNewsById(param.id).subscribe(data => {
       this.news = data;
     });
   });


  }




}
