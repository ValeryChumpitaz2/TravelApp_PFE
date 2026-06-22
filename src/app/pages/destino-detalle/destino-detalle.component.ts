import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-destino-detalle',
  standalone: false,
  templateUrl: './destino-detalle.component.html',
  styleUrl: './destino-detalle.component.css'
})
export class DestinoDetalleComponent {

  destino: any;

  destinos = [
    {
      id: 1,
      nombre: 'París',
      pais: 'Francia',
      descripcion: 'Ciudad del amor, cultura y arquitectura icónica.',
      precio: 1200,
      imagenes: [
        'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
        'https://images.unsplash.com/photo-1522098543979-ffc7f79d2a8e',
        'https://images.unsplash.com/photo-1431274172761-fca41d930114'
      ]
    },
    {
      id: 2,
      nombre: 'Tokio',
      pais: 'Japón',
      descripcion: 'Tecnología avanzada y tradición milenaria.',
      precio: 1500,
      imagenes: [
        'https://images.unsplash.com/photo-1549692520-acc6669e2f0c',
        'https://images.unsplash.com/photo-1558862107-d49ef2a04d72',
        'https://images.unsplash.com/photo-1505066827145-9b9c2c1d1d56'
      ]
    },
    {
      id: 3,
      nombre: 'Cusco',
      pais: 'Perú',
      descripcion: 'Historia inca y maravillas del mundo.',
      precio: 800,
      imagenes: [
        'https://images.unsplash.com/photo-1587595431973-160d0d94add1',
        'https://images.unsplash.com/photo-1612810436541-336d3a4c2d34',
        'https://images.unsplash.com/photo-1599921848707-0e9e6a3f3b2c'
      ]
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.destino = this.destinos.find(d => d.id === id);

  }
}