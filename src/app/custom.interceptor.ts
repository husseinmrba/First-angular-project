import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // take the request and add to it a new header
    let modifuedRequest = request.clone({
      setHeaders: {
        'Authorization': 'Bearer 43423432424342433432243434234'
      }
    });
    return next.handle(modifuedRequest);
  }
}
