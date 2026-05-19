# Tripleten web_project_around_es

# Proyecto 8: Around The U.S.

## Descripción

Around The U.S. es una aplicación web interactiva que permite a los usuarios crear y gestionar una galería de tarjetas con imágenes de lugares favoritos. Los usuarios pueden agregar nuevas tarjetas, dar "me gusta" a las existentes, eliminarlas y ver las imágenes en tamaño completo. Toda la información se guarda y sincroniza con un servidor remoto a través de una API REST.

## Funcionalidad

- **Galería de tarjetas**: Visualización de tarjetas con imágenes y títulos de lugares cargadas desde el servidor
- **Agregar tarjetas**: Formulario para crear nuevas tarjetas con título e imagen, guardadas en el servidor
- **Botón "Me gusta"**: Funcionalidad para marcar tarjetas favoritas, sincronizada con el servidor
- **Eliminar tarjetas**: Popup de confirmación antes de eliminar, y borrado en el servidor
- **Vista ampliada**: Modal para ver imágenes en tamaño completo
- **Editar perfil**: Formulario para modificar nombre y descripción del usuario, guardado en el servidor
- **Editar foto de perfil**: Posibilidad de cambiar el avatar desde un enlace de imagen
- **Interfaz responsive**: Adaptable a diferentes tamaños de pantalla
- **Generación dinámica**: Las tarjetas se crean dinámicamente usando templates HTML
- **Validación de formularios**: Validación en tiempo real de campos obligatorios con mensajes de error
- **Indicador de carga**: Los botones muestran "Guardando..." mientras se espera respuesta del servidor
- **Cierre de modales**: Posibilidad de cerrar ventanas emergentes con la tecla Esc o haciendo clic en el overlay

## Tecnologías utilizadas

- **HTML5**: Estructura semántica y templates
- **CSS3**: Estilos, diseño responsive y metodología BEM
- **JavaScript ES6**: Clases, módulos, promesas y manipulación del DOM
- **Fetch API**: Comunicación asíncrona con el servidor
- **API REST**: Integración con servidor remoto para persistencia de datos
- **Git**: Control de versiones
- **GitHub Pages**: Despliegue del proyecto

## Integración con el servidor

El proyecto se comunica con la API de Around The U.S. para todas las operaciones de datos:

- `GET /users/me` — Carga la información del perfil al iniciar
- `GET /cards` — Carga las tarjetas iniciales desde el servidor
- `PATCH /users/me` — Guarda los cambios del perfil
- `PATCH /users/me/avatar` — Actualiza la foto de perfil
- `POST /cards` — Crea una nueva tarjeta en el servidor
- `DELETE /cards/:id` — Elimina una tarjeta del servidor
- `PUT /cards/:id/likes` — Da "me gusta" a una tarjeta
- `DELETE /cards/:id/likes` — Quita el "me gusta" de una tarjeta

## Estructura del proyecto

```
WEB_PROJECT_AROUND/
├── index.html
├── blocks/
│   ├── card.css
│   ├── cards.css
│   ├── content.css
│   ├── footer.css
│   ├── header.css
│   ├── page.css
│   ├── popup.css
│   └── profile.css
├── images/
│   ├── add-icon.svg
│   ├── avatar.jpg
│   ├── close.svg
│   ├── delete-icon.svg
│   ├── edit-icon.svg
│   ├── like-active.svg
│   ├── like-inactive.svg
│   ├── logo.svg
│   └── placeholder.jpg
├── pages/
│   └── index.css
├── scripts/
│   ├── index.js
│   ├── Api.js
│   ├── Card.js
│   ├── FormValidator.js
│   ├── Popup.js
│   ├── PopupWithConfirmation.js
│   ├── PopupWithForm.js
│   ├── PopupWithImage.js
│   └── utils.js
└── vendor/
    ├── fonts/
    │   ├── Inter-Black.woff2
    │   ├── Inter-Medium.woff2
    │   └── Inter-Regular.woff2
    ├── fonts.css
    └── normalize.css
```

## Enlace al proyecto

[Ver proyecto en GitHub Pages](https://diego-caceres-s.github.io/web_project_around_es/)
