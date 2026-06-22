import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {

  mostrarHeader = true;

  constructor(private router: Router) {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {

        const url = event.urlAfterRedirects;

        // ❌ ocultar en login y dashboard
        this.mostrarHeader = !(
          url.includes('/login') ||
          url.includes('/dashboard') ||
          url.includes('/perfil') ||
          url.includes('/reservas') ||
          url.includes('/favoritos')
        );
      }
    });
  }
}