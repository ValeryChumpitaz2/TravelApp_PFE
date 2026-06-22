import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit {

  hora: string = '';
  isLogged = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkLogin();

    setInterval(() => {
      this.hora = new Date().toLocaleTimeString();
    }, 1000);
  }

  checkLogin() {
    this.isLogged = localStorage.getItem('auth') === 'true';
  }

  logout() {
    localStorage.removeItem('auth');
    this.isLogged = false;
    this.router.navigate(['/home']);
  }
}