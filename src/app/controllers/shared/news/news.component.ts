import {Component, HostBinding, OnInit} from '@angular/core';
import {NewsService} from "../../../services/news.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [NewsService]
})
export class NewsComponent implements OnInit {
  @HostBinding('class') parentClass = 'row';
  news: any;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNews().subscribe(data => {
      this.news = data;
    });
  }

}
