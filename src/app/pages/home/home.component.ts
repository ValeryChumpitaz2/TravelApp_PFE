import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  usuario: string = 'Viajero';

  destacados = [
    {
      titulo: 'París',
      descripcion: 'Ciudad del amor',
      imagen: 'https://images5.alphacoders.com/392/392246.jpg'
    },
    {
      titulo: 'Tokio',
      descripcion: 'Tecnología y cultura',
      imagen: 'https://content.r9cdn.net/rimg/dimg/ea/d1/34822ae1-city-21033-1647f45cd43.jpg?width=1366&height=768&xhint=1518&yhint=1265&crop=true'
    },
    {
      titulo: 'Cusco',
      descripcion: 'Historia y aventura',
      imagen: 'https://tse2.mm.bing.net/th/id/OIP.2yE37EeLBUzrnRX2AtpN3gHaEK?pid=Api&P=0&h=180'
    },
    {
      titulo: 'Santorini',
      descripcion: 'Islas paradisíacas',
      imagen: 'https://wallpaperaccess.com/full/496881.jpg'
    }
  ];
}