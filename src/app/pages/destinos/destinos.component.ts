import { Component } from '@angular/core';

@Component({
  selector: 'app-destinos',
  standalone: false,
  templateUrl: './destinos.component.html',
  styleUrl: './destinos.component.css'
})export class DestinosComponent {

  destinos = [
    {
      id: 1,
      nombre: 'París',
      pais: 'Francia',
      precio: 1200,
      imagen: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34'
    },
    {
      id: 2,
      nombre: 'Tokio',
      pais: 'Japón',
      precio: 1500,
      imagen: 'https://images.unsplash.com/photo-1549693578-d683be217e58'
    },
    {
      id: 3,
      nombre: 'Cusco',
      pais: 'Perú',
      precio: 800,
      imagen: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1'
    },
    {
      id: 4,
      nombre: 'Santorini',
      pais: 'Grecia',
      precio: 1400,
      imagen: 'https://images.unsplash.com/photo-1504512485720-7d83a16ee930'
    }
  ];
}