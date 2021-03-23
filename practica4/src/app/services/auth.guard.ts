import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

// Servicios
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private LoginService:LoginService,
               private router:Router ) {}

  private flag( session:boolean ) {
    if ( session ) return session;
    else {
      this.router.navigate(['login']);
      return session;
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.flag(this.LoginService.getSession) ;
  }
  
}
