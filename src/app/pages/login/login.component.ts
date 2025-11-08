import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email = 'cand_0006@larueda.com';
  password = 'Password123';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  submit() {
    this.auth.login(this.email, this.password).subscribe({
      next: () => this.router.navigate(['/home']),
      error: err => this.error = err?.error?.message || 'Credenciales inválidas'
    });
  }
}
