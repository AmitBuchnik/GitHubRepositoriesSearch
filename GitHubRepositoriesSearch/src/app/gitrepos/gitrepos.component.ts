import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';
import { Gitrepoinfo } from '../models/gitrepoinfo';

@Component({
  selector: 'app-gitrepos',
  templateUrl: './gitrepos.component.html',
  styleUrls: ['./gitrepos.component.css']
})
export class GitreposComponent implements OnInit {
  // repositories list
  gitRepoList: Gitrepoinfo[];

  constructor(private githubserv: GithubService) { }

  ngOnInit() {
  }

  // click event handler for search repository in github
  public loadGithubRepos(searchItem) {
    if (searchItem != "") {
      this.githubserv.getRepositoriesByName(searchItem).subscribe((data) => {
        this.gitRepoList = data;
      });
    }
  }

  // save repository in MVC web api
  saveBookMark(git: Gitrepoinfo) {
    this.githubserv.bookRepository(git);
  }
}


