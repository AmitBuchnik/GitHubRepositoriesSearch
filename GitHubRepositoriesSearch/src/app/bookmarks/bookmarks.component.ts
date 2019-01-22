import { Component, OnInit } from '@angular/core';
import { Gitrepoinfo } from '../models/gitrepoinfo';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  bookmarks: Gitrepoinfo[];

  constructor(private githubserv: GithubService) { }

  ngOnInit() {
    // load bookmarks on init
    this.loadGithubBookmarks();
  }

  public loadGithubBookmarks() {
    this.githubserv.getBookedRepositories().subscribe((data) => {
      this.bookmarks = data;
    });
  }
}
