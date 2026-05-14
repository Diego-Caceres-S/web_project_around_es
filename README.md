# Tripleten web_project_around_es

# Proyecto 8: Around The U.S.

## Descripción

Around The U.S. es una aplicación web interactiva que permite a los usuarios crear y gestionar una galería de tarjetas con imágenes de lugares favoritos. Los usuarios pueden agregar nuevas tarjetas, dar "me gusta" a las existentes, eliminarlas y ver las imágenes en tamaño completo.

## Funcionalidad

- **Galería de tarjetas**: Visualización de tarjetas con imágenes y títulos de lugares
- **Agregar tarjetas**: Formulario para crear nuevas tarjetas con título e imagen
- **Botón "Me gusta"**: Funcionalidad para marcar tarjetas favoritas con estados activo/inactivo
- **Eliminar tarjetas**: Posibilidad de remover tarjetas de la galería
- **Vista ampliada**: Modal para ver imágenes en tamaño completo
- **Interfaz responsive**: Adaptable a diferentes tamaños de pantalla
- **Generación dinámica**: Las tarjetas se crean dinámicamente usando templates HTML
- **Validación de formularios**: Validación en tiempo real de campos obligatorios con mensajes de error
- **Cierre de modales mejorado**: Posibilidad de cerrar ventanas emergentes con la tecla Esc o haciendo clic en el overlay

## Tecnologías utilizadas

- **HTML5**: Estructura semántica y templates
- **CSS3**: Estilos, diseño responsive y metodología BEM
- **JavaScript ES6**: Funcionalidad interactiva y manipulación del DOM
- **Git**: Control de versiones
- **GitHub Pages**: Despliegue del proyecto

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
│   └── index.js
│   └── FormValidator.js
│   └── Card.js
│   └── utils.js
│   └── Api.js
│   └── PopupWithConfirmation.js
│   └── PopupWithImage.js
│   └── Section.js
│   └── UserInfo.js
│   └── PopWithForm.js
└── vendor/
    ├── fonts/
    │   ├── Inter-Black.woff2
    │   ├── Inter-Medium.woff2
    │   └── Inter-Regular.woff2
    ├── fonts.css
    └── normalize.css
```
