import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  usuario = '';
  password = '';

  loading = false;
  error = false;

  constructor(private router: Router) {}

  login() {

    if (!this.usuario || !this.password) {
      this.error = true;
      setTimeout(() => this.error = false, 1200);
      return;
    }

    this.loading = true;

    setTimeout(() => {

      this.loading = false;

      localStorage.setItem('auth', 'true');

      // transición suave antes de entrar
      this.router.navigate(['/home']);

    }, 1200);
  }
}