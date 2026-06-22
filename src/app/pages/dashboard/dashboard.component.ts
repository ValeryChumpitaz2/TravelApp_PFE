import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit {

  destinos = 12;
  paquetes = 5;
  ofertas = 3;

  notificaciones: string[] = [];

  ngOnInit() {

    this.generarNotificaciones();

    setInterval(() => {
      this.generarNotificaciones();
    }, 8000);
  }

  generarNotificaciones() {

    const mensajes = [
      '🔥 Nueva oferta en París',
      '✈️ Paquete a Tokio con descuento',
      '🌍 Destino trending: Cusco',
      '⏳ Oferta de Santorini expira pronto'
    ];

    const random = mensajes[Math.floor(Math.random() * mensajes.length)];

    this.notificaciones.unshift(random);

    if (this.notificaciones.length > 5) {
      this.notificaciones.pop();
    }
  }
}