import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
    requests: HttpRequest<any>[] = [];

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
        const token = 'TOKEN';
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`,
                }
            });
        }
        return next.handle(request).pipe(
            catchError(response => {
                alert(response.error || 'Oops, Somthing went wrong.');
                return throwError(response);
            })
        );
    }
}
