import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { BehaviorSubject, Observable, map, catchError, of} from 'rxjs'
import { config } from '../config/application.config';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
    providedIn: 'root'
})
export class OauthService{
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    private url = config.apiUrl + '/oauth/token';

    constructor(private http: HttpClient, private router: Router) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {                 

        const httpHeaders = {
            headers: new HttpHeaders({
                'Content-Type': config.contentType,
                'Authorization': config.requestAuthorization
            })
        };

        let creds = 'username=' + username + '&password=' + password + '&grant_type=password';
        return this.http.post<any>(this.url, creds, httpHeaders).pipe(map(token => {
            if (token && token.access_token) {
                var mUser: User = new User();
                mUser.username = token.username;
                mUser.password = token.access_token;
                localStorage.setItem(config.currentUser, JSON.stringify(mUser));
                this.currentUserSubject.next(mUser);
            }
            return mUser;
        })
        );
    }

    logout() {
        localStorage.removeItem(config.currentUser);
        this.currentUserSubject.next(null);
        this.router.navigate(['/login']);
    }
}