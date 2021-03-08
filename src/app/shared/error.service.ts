import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private http:HttpClient) { }
  public errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error")
  }
}
