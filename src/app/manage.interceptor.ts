import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ManageInterceptor implements HttpInterceptor {

  constructor() { }

   intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
     return next.handle(request)
  //     .pipe(
  //       catchError(this.errorHandler));
  // }
  // private errorHandler(error: HttpErrorResponse) {
  //   return throwError(error.message || "Server Error")
   }
}
