import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ManageService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get<any>(`assets/countrys.json`)
      .pipe(catchError(this.errorHandler));
  }
  public errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error")
  }
}
