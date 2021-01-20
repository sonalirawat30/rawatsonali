import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private _url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(`${this._url}/employees`);
  }

  deleteData(id: number): Observable<IEmployee[]> {
    return this.http.delete<IEmployee[]>(`${this._url}/employees/${id}`);
  }

  createData(employee): Observable<IEmployee[]> {
    return this.http
      .post<any>(`${this._url}/employees`, employee)
      .pipe(retry(0));
  }

  getEmployeeById(id: number) {
    return this.http.get<IEmployee[]>(`${this._url}/employees/${id}`);
  }

  updateEmployee(employee): Observable<any> {
    return this.http
      .put(`${this._url}/employees/${employee.id}`, employee)
      .pipe(retry(0));
  }

}
