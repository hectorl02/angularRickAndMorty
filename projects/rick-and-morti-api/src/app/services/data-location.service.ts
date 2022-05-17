import { HttpClient } from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataLocationService {

  listLocations: any = [];
  location:string= '/location'

  constructor(
    private http: HttpClient
  ) { }

  getLocations() {
    this.http.get<[]>(environment.url_api + this.location)
    .subscribe(arg => {
      this.listLocations = arg;
    })
    return this.listLocations;
  }

  getLocation(id:string) {
    return this.http.get<[]>(environment.url_api + this.location + `/${id}`)
  }
}
