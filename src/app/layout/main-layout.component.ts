import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html'
})
export class MainLayoutComponent {
  currentYear = new Date().getFullYear();
  user: any;

  constructor(private auth: AuthService, private router: Router) {
    this.user = this.auth.getUser();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}

