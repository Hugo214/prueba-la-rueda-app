import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bulk-upload',
  templateUrl: './bulk-upload.component.html'
})
export class BulkUploadComponent {
  fileName = '';
  fileData: any[] = [];
  message = '';
  error = '';

  constructor(private router: Router) {}

  // 🔹 Leer archivo JSON seleccionado
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    this.fileName = file.name;

    const reader = new FileReader();
    reader.onload = (e: any) => {
      try {
        const json = JSON.parse(e.target.result);
        if (Array.isArray(json)) {
          this.fileData = json;
          this.message = `${json.length} contactos listos para cargar.`;
          this.error = '';
        } else {
          this.error = 'El archivo debe contener un arreglo de objetos JSON.';
          this.message = '';
        }
      } catch (err) {
        this.error = 'Archivo JSON inválido.';
        this.message = '';
      }
    };
    reader.readAsText(file);
  }

  // 🔹 Guardar los contactos en localStorage
  saveAll() {
    if (this.fileData.length === 0) {
      this.error = 'No hay datos para guardar.';
      return;
    }

    const existing = JSON.parse(localStorage.getItem('contacts') || '[]');
    const combined = [...existing, ...this.fileData];
    localStorage.setItem('contacts', JSON.stringify(combined));

    this.message = `✅ ${this.fileData.length} contactos guardados exitosamente.`;
    setTimeout(() => this.router.navigate(['/contacts']), 1500);
  }
}
