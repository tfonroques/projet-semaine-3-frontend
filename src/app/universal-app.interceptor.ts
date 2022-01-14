import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class UniversalAppInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const currentUser = this.authService.currentUserValue;
    console.log('intercepted', currentUser);
    if (currentUser && currentUser.token) {
      req = req.clone({
        setHeaders: {
          Authorization: `${currentUser.token}`,
        },
      });
    }

    return next.handle(req);
  }
}
