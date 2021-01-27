import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get('https://gorest.co.in/public-api/users');
  }
  updateData(user): Observable<any> {
    return this.http.put('https://gorest.co.in/public-api/users${users.id}', user);
  }
    deleteData(id: number): Observable<any> {
    return this.http.delete<any>('https://gorest.co.in/public-api/users/${id}');
   }
}