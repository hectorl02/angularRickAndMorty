import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataEpisodeService {

  listEpisodes: any = [];
  episode:string= '/episode'

  constructor(
    private http: HttpClient
  ) { }

  getEpisodes() {
    this.http.get<[]>(environment.url_api + this.listEpisodes)
    .subscribe(arg => {
      this.listEpisodes = arg;
    })
    return this.listEpisodes;
  }

  getEpisode() {}


}
