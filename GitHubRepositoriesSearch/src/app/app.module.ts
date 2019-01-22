import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitreposComponent } from './gitrepos/gitrepos.component';
import { HeaderComponent } from './header/header.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { IsBookedDirective } from './isbooked.directive';

@NgModule({
  declarations: [
    AppComponent,
    GitreposComponent,
    HeaderComponent,
    BookmarksComponent,
    IsBookedDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule // pagination
  ],
  providers: [
    {
      provide: APP_BASE_HREF, // needed for routing
      useValue: '/'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
