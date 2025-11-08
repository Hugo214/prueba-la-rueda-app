import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html'
})
export class ContactsListComponent implements OnInit {
  contacts: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadContacts();
  }

  // 🔹 Carga contactos del localStorage
  loadContacts() {
    const data = localStorage.getItem('contacts');
    this.contacts = data ? JSON.parse(data) : [];
  }

  // 🔹 Eliminar contacto (opcional)
  deleteContact(index: number) {
    this.contacts.splice(index, 1);
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }

  // 🔹 Ir al formulario de creación
  goToCreate() {
    this.router.navigate(['/contacts/create']);
  }
}
