import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private _url = 'http://localhost:3000';
  constructor(private http:HttpClient) { }
  getData(): Observable<any> {
    return this.http.get<any>(`${this._url}/data`);
  }
}
