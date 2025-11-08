import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  user: any;
  currentYear: number;

  constructor(private auth: AuthService, private router: Router) {
    this.user = this.auth.getUser();
    this.currentYear = new Date().getFullYear();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
