import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth:AuthService) { }

  canActivate = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean =>
    this.auth.isAuthenticated();
}
