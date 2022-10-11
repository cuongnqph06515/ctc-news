import { Injectable} from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { OauthService } from '../service/oauth.service';

@Injectable()
export class LoginGuard implements CanActivate{
    constructor(private oauthService: OauthService, private router: Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(this.oauthService.currentUserValue){
            this.router.navigate(['/dashboard']);
            return false;
        }
        return true;
    }
}