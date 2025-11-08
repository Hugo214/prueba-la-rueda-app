import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html'
})
export class ContactCreateComponent {
  // 🔹 Modelo del formulario
  contact = {
    placa: '',
    nombre: '',
    telefono: '',
    email: ''
  };

  // 🔹 Mensajes de feedback
  message = '';
  error = '';

  constructor(private router: Router) {}

  saveContact() {
    // Validación simple
    if (!this.contact.placa || !this.contact.nombre) {
      this.error = 'Por favor completa los campos obligatorios.';
      this.message = '';
      return;
    }

    // Simula guardado local
    const saved = JSON.parse(localStorage.getItem('contacts') || '[]');
    saved.push(this.contact);
    localStorage.setItem('contacts', JSON.stringify(saved));

    // Limpia el formulario
    this.message = '✅ Contacto guardado correctamente';
    this.error = '';
    this.contact = { placa: '', nombre: '', telefono: '', email: '' };

    // Redirige al listado después de 1.5s
    setTimeout(() => this.router.navigate(['/contacts']), 1500);
  }
}
