import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const isLoggedIn = this.authService.isLoggedIn();
    const isAuthUrl = request.url.endsWith('token/' || 'register/');
    if (isLoggedIn && !isAuthUrl) {
      request = request.clone({
        headers: request.headers.set(
          'Authorization',
          'Bearer ' + this.authService.getAccessToken()
        ),
      });
    }

    return next.handle(request).pipe(
      catchError((error) => {
        if (error.status === 401 && !isAuthUrl) {
          return this.authService.refreshToken().pipe(
            switchMap((response: any) => {
              request = request.clone({
                headers: request.headers.set(
                  'Authorization',
                  'Bearer ' + this.authService.getAccessToken()
                ),
              });
              return next.handle(request);
            })
          );
        } else {
          return throwError(() => new Error('Server error'));
        }
      })
    );
  }
}
