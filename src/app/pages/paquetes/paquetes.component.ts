import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paquetes',
  standalone: false,
  templateUrl: './paquetes.component.html',
  styleUrl: './paquetes.component.css'
})
export class PaquetesComponent implements OnInit {

  paquetes = [
    {
      titulo: 'París romántico',
      duracion: '5 días / 4 noches',
      precio: 1200,
      descuento: 20,
      imagen: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
      expira: new Date(new Date().getTime() + 1000 * 60 * 60 * 24) // 24h
    },
    {
      titulo: 'Tokio express',
      duracion: '7 días / 6 noches',
      precio: 1600,
      descuento: 15,
      imagen: 'https://images.unsplash.com/photo-1549693578-d683be217e58',
      expira: new Date(new Date().getTime() + 1000 * 60 * 60 * 10) // 10h
    },
    {
      titulo: 'Cusco aventura',
      duracion: '4 días / 3 noches',
      precio: 800,
      descuento: 25,
      imagen: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1',
      expira: new Date(new Date().getTime() + 1000 * 60 * 60 * 5) // 5h
    }
  ];

  ngOnInit() {
    setInterval(() => {
      this.paquetes = [...this.paquetes];
    }, 1000);
  }

  getTiempoRestante(fecha: Date): string {

    const ahora = new Date().getTime();
    const expira = new Date(fecha).getTime();

    const diferencia = expira - ahora;

    if (diferencia <= 0) return 'Oferta expirada';

    const horas = Math.floor(diferencia / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    return `${horas}h ${minutos}m ${segundos}s`;
  }
}