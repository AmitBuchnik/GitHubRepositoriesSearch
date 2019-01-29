import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

import { GithubService } from '../services/github.service';
import { Gitrepoinfo, Repositories } from '../models/gitrepoinfo';

@Component({
  selector: 'app-gitrepos',
  templateUrl: './gitrepos.component.html',
  styleUrls: ['./gitrepos.component.css']
})
export class GitreposComponent implements OnInit {
  // repositories: Observable<Repositories>;  
  repositories: Repositories;
  searchTerm: string = '';
  page: number; // pagination current page

  constructor(private githubserv: GithubService) { }

  ngOnInit() {
    let state = this.githubserv.getState();
    if (state) {
      this.searchTerm = state.searchTerm;
      this.page = state.currentPage;
      this.repositories = state.repositories;
    } else {
      this.page = 1;
    }
  }

  // click event handler for search repository in github
  public loadGithubRepos(page: number) {
    this.page = page;

    if (this.searchTerm != "") {
      this.githubserv.getRepositoriesByName(this.searchTerm, page).subscribe((data) => {
        this.repositories = data;
      });

      // this.repositories = this.githubserv.getRepositoriesByName(this.searchItem, page);
    }
  }

  // save repository in MVC web api
  saveBookMark(git: Gitrepoinfo) {
    this.githubserv.bookRepository(git);
  }
}


