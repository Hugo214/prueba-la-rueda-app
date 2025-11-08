
# 🚗 La Rueda S.A.S — Prueba Técnica Angular + TailwindCSS

Aplicación web desarrollada con **Angular 18** y **TailwindCSS** para la gestión de contactos.  
Incluye login, CRUD, carga masiva y persistencia local sin backend.

“El proyecto fue migrado a Angular 18 LTS debido a la incompatibilidad de Angular 11 con Node 20.
Se mantuvo la estructura y lógica del código solicitada, garantizando compatibilidad, seguridad y soporte vigente.”

---

## 🧱 Tecnologías
- Angular 18
- Tailwind CSS
- TypeScript
- LocalStorage
- FileReader API

---

## ⚙️ Instalación
```bash
git clone https://github.com/Hugo214/prueba-la-rueda-app.git
cd prueba-la-rueda-app
npm install
ng serve
```
Abrir en: [http://localhost:4200](http://localhost:4200)

---

---

## 🧩 Funcionalidades

### Login
- Validación local.
- Guarda token simulado.

### Contactos
- Listado dinámico con eliminación.
- Datos guardados en `localStorage`.

### Crear contacto
- Formulario con placa, nombre, teléfono y correo.
- Guarda y redirige al listado.

### Carga masiva
- Subir archivo `contacts.json`.
- Guarda múltiples contactos en localStorage.

**Ejemplo de archivo JSON:**
```json
[
  {"placa":"ABC123","nombre":"Juan Pérez","telefono":"3004567890","email":"juan@larueda.com"},
  {"placa":"XYZ987","nombre":"María Gómez","telefono":"3109876543","email":"maria@larueda.com"}
]
```

---

## 🎨 Diseño
- Tailwind CSS.
- Navbar y footer visibles en todas las páginas.
- Colores principales: índigo, blanco y gris claro.

---


---

## 💾 Persistencia
Datos almacenados en `localStorage`:
- `user` → sesión actual
- `contacts` → lista de contactos

---


## 👨‍💻 Autor
**hugo cabezas aragon**  
Prueba Técnica — *La Rueda S.A.S*  
