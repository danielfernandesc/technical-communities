import { NotFoundComponent } from './controllers/error/not-found/not-found.component'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './controllers/fragments/navbar/navbar.component';
import { SidebarComponent } from './controllers/fragments/sidebar/sidebar.component';
import { BaseComponent } from './controllers/fragments/base/base.component';
import { HomeComponent } from './controllers/shared/home/home.component';
import { NewsComponent } from './controllers/shared/news/news.component';
import { EventsComponent } from './controllers/shared/events/events.component';
import { ForumComponent } from './controllers/shared/forum/forum.component';
import { CommunityComponent } from './controllers/shared/community/community.component';
import { SupportComponent } from './controllers/shared/support/support.component';
import {RouterModule} from '@angular/router';
import { FooterComponent } from './controllers/fragments/footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFireAuth, AngularFireAuthModule} from "angularfire2/auth";
import {AngularFireModule, FirebaseApp} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {environment} from "../environments/environment";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MatSelectModule } from '@angular/material/select';
import {EventFormComponent} from './controllers/shared/events/event-form/event-form.component';
import { NewsTeaserComponent } from './controllers/shared/news/news-teaser/news-teaser.component';
import {SummaryPipe} from "./Pipes/summary.pipe";
import {UrlTransformPipe} from "./Pipes/url-transform";
import { NewsPageComponent } from './controllers/shared/news/news-page/news-page.component';
import { NewsFormComponent } from './controllers/shared/news/news-form/news-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    BaseComponent,
    HomeComponent,
    NewsComponent,
    EventsComponent,
    ForumComponent,
    CommunityComponent,
    SupportComponent,
    NotFoundComponent,
    FooterComponent,
    EventFormComponent,
    NewsTeaserComponent,
    SummaryPipe,
    UrlTransformPipe,
    NewsPageComponent,
    NewsFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'news', component: NewsComponent},
      {path: 'news/news-form', component: NewsFormComponent},
      {path: 'news/:title/:id', component: NewsPageComponent},
      {path: 'events', component: EventsComponent},
      {path: 'events/event-form', component: EventFormComponent},
      {path: 'forum', component: ForumComponent},
      {path: 'community', component: CommunityComponent},
      {path: 'support', component: SupportComponent},
      {path: '**', component: NotFoundComponent},
    ]),
    HttpClientModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
