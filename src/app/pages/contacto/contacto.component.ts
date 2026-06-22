import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: false,
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  nombre = '';
  email = '';
  mensaje = '';

  enviar() {
    if (!this.nombre || !this.email || !this.mensaje) {
      alert('Completa todos los campos');
      return;
    }

    alert('Mensaje enviado correctamente ✈️');

    this.nombre = '';
    this.email = '';
    this.mensaje = '';
  }
}