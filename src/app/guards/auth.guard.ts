import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { config } from '../config/application.config';
import { OauthService } from '../service/oauth.service';



@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private oauthService: OauthService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLogin();
  }

  checkLogin(): boolean {
    let isLogin = this.oauthService.currentUserValue;
    if (isLogin) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
