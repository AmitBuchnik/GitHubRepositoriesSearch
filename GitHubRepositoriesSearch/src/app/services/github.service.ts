import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map, tap, switchMap } from "rxjs/operators";
import { Observable } from "rxjs";

import { Gitrepoinfo, Repositories } from '../models/gitrepoinfo';

export class State {
  searchTerm: string;
  currentPage: number;
  repositories: Repositories;
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  state: State;
  constructor(private httpClient: HttpClient) { }

  // get repositories from GitHub using github api
  // getRepositoriesByName(searchKeyWord: string, page: number): Observable<Gitrepoinfo[]> {
  // return this.httpClient.get(`https://api.github.com/search/repositories?q=` + searchKeyWord).
  //     pipe(map((item: any) => item.items.map(p => <Gitrepoinfo>
  //       {
  //         name: p.name,
  //         repoUrl: p.html_url,
  //         avatar: p.owner.avatar_url
  //       })));
  // }

  getState(): State {
    return this.state;
  }

  getRepositoriesByName(searchKeyWord: string, page: number): Observable<Repositories> {
    return this.httpClient.get(`https://api.github.com/search/repositories?q=${searchKeyWord}+in:name&page=${page}&per_page=20`).
      pipe(map((data: any) => <Repositories> {
        total_count: data.total_count,
        incomplete_results: data.incomplete_results,
        items: data.items.map(p => <Gitrepoinfo>
          {
            name: p.name,
            repoUrl: p.html_url,
            avatar: p.owner.avatar_url
          })
      }), tap((repositories: Repositories) => {
        this.state = new State();
        this.state.searchTerm = searchKeyWord;
        this.state.currentPage = page;
        this.state.repositories = repositories;
      }));
  }

  // get booked repositories from MVC web api
  getBookedRepositories(): Observable<Gitrepoinfo[]> {
    return this.httpClient.get<Gitrepoinfo[]>(`/api/Git/GetBookedRepositories`);
  }

  // save repository in MVC web api
  bookRepository(git: Gitrepoinfo) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json;charset=utf-8'
    });

    this.httpClient.post<Gitrepoinfo>('/api/Git/BookRepository', git, { headers: headers }).subscribe();
  }
}
