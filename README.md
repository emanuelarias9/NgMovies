# 🎬 NgMovies

Una aplicación **Angular 19** para gestionar películas, géneros, actores y cines, creada como proyecto educativo.

---

## 🧩 Descripción

NgMovies es una plataforma tipo mini-IMDb donde puedes:
- Listar, crear, editar y eliminar **películas**, **actores**, **generos** y **cines** 
- Usar filtros en películas (por título, género, próximos estrenos, en cines)
- Subir imágenes (por ejemplo, fotos de actores)
- Manejar errores HTTP con componentes personalizados (404, 500 y un componente genérico)

---

## 🚀 Tecnologías

- **Angular 19**
- **Angular Material** (componentes UI)
- **SweetAlert2** (para confirmaciones visuales)
- **Reactive Forms**
- **HttpClient** para consumir APIs REST
- **Rutas** con guards y manejo de errores
- **FormData** y seguimiento de progreso para uploads

---

## 🧭 Instalación

Clona el repositorio y prepara el proyecto:

```bash
git clone https://github.com/emanuelarias9/NgMovies.git
cd NgMovies
npm install
```

Asegúrate de tener también la API configurada (u otro backend). Luego, para iniciar:

```bash
ng serve --open
```

¡La aplicación se abrirá en `http://localhost:4200`!

---

## 📁 Estructura del proyecto

```
src/
├─ app/
│  ├─ actores/           # CRUD de actores
│  ├─ cines/            # CRUD de cines
│  ├─ generos/          # CRUD de géneros
│  ├─ peliculas/        # Búsqueda, filtrado, CRUD películas
│  ├─ componentes/      # Componentes compartidos (paginación, carga)
│  ├─ errores/          # Componentes Error404, Error500, ErrorComponent
│  ├─ servicios/        # Lógica de interacción con API
│  ├─ app-routing.module.ts
│  └─ app.component.ts
├─ assets/
├─ environments/        # environment.ts / .prod.ts
├─ theme.scss           # Custom theme con paletas Material
└─ styles.css
```
---

## 🧠 Buenas prácticas implementadas

1. **Theming**: Uso de `theme.scss` con `.toLowerCase()`, paletas personalizadas y `@use`.
2. **Filtros persistentes**: QueryParams para título, género, enCines y próximos.
3. **Uploads con progreso**: `HttpClient` con `reportProgress` y `observe: 'events'`.
4. **Manejo de errores HTTP**: Interceptores para redirigir a tus componentes 404/500.
5. **SweetAlert2**: Confirmaciones elegantes con `Swal.fire()`.

---

## 🧪 Extensiones recomendadas

- **Guardar filtros en localStorage** si no deseas usar QueryParams
- **Lazy loading** para optimizar carga de módulos
- **Unit tests** para formularios y servicios
- **PWA**, resumir acciones (undo) en UI, paginación remota

---

## 🧭 Cómo contribuir

1. Haz un **fork** del proyecto
2. Crea una rama (`git checkout -b feature/descripción`)
3. Haz tus cambios y haz **commit** con buenos mensajes
4. Abre un **pull request**

---

## 📜 Licencia

Proyecto educativo en mi repositorio público para fines de aprendizaje. No se requiere licencia especial.
