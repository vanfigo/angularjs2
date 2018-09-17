import { AuthService } from '../../services/auth.service';
import { Component } from '@angular/core';
import { AuthGuardService } from '../../services/auth-guard.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {

  constructor(public auth:AuthService,
              private guard: AuthGuardService) {
    this.auth.handleAuthentication();
  }

  login = () => {
    this.auth.login();
  }

  logout = () => {
    this.auth.logout();
  }

}
