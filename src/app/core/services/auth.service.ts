import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private candidateId = 'CAND_0006';

  constructor() {}

  // 🔐 Simula login (mock)
  login(email: string, password: string): Observable<any> {
    return new Observable(observer => {
      if (email === 'cand_0006@larueda.com' && password === 'Password123') {
        const fakeToken = 'mock-token-12345';
        const fakeUser = { email, name: 'Candidato 0006' };

        localStorage.setItem('token', fakeToken);
        localStorage.setItem('user', JSON.stringify(fakeUser));
        localStorage.setItem('candidateId', this.candidateId);

        observer.next({ token: fakeToken, user: fakeUser });
        observer.complete();
      } else {
        observer.error({ message: 'Credenciales incorrectas' });
      }
    });
  }

  // 🧠 Obtiene el token guardado
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // 👤 Obtiene el usuario
  getUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  // ✅ Verifica si hay sesión activa
  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  // 🚪 Cierra sesión
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('candidateId');
  }
}
