import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OauthService } from '../service/oauth.service';

@Injectable()
export class JWTInterceptor implements HttpInterceptor{
    constructor(private oauthService: OauthService){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = this.oauthService.currentUserValue;
        if (currentUser && currentUser.password) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.password}`
                }
            });
        }
        return next.handle(request);
    }
}