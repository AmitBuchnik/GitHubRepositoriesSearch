import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

import { Gitrepoinfo } from '../models/gitrepoinfo';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient: HttpClient) { }

  // get repositories from GitHub using github api
  getRepositoriesByName(searchKeyWord: string): Observable<Gitrepoinfo[]> {
    return this.httpClient.get(`https://api.github.com/search/repositories?q=` + searchKeyWord).
      pipe(map((item: any) => item.items.map(p => <Gitrepoinfo>
        {
          name: p.name,
          repoUrl: p.html_url,
          avatar: p.owner.avatar_url
        })));
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
