import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitreposComponent } from './gitrepos/gitrepos.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';

const routes: Routes = [
  { path: '', component: GitreposComponent }, // home
  { path: 'bookmarks', component: BookmarksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
