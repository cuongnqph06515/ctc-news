import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { OauthService } from '../service/oauth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
    public status: string='';
    constructor(private oauthService: OauthService){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401 || err.status === 403) {
                this.oauthService.logout();
            }     
            return throwError(err);
        }))
    }
}