import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit, OnDestroy {

  hora: string = '';
  intervalo: any;

  constructor(private router: Router) {}

  ngOnInit() {

    this.actualizarHora();

    this.intervalo = setInterval(() => {
      this.actualizarHora();
    }, 1000);
  }

  actualizarHora() {
    const now = new Date();
    this.hora = now.toLocaleTimeString();
  }

  ngOnDestroy() {
    clearInterval(this.intervalo);
  }

  logout() {
    localStorage.removeItem('auth');
    this.router.navigate(['/login']);
  }
}