# public/index.html

Archivo HTML base de la aplicación.

## Descripción

Plantilla HTML principal que contiene la estructura básica de la página y el punto de montaje para la aplicación React.

## Características

- **Meta tags responsive**: Viewport configurado para dispositivos móviles
- **Idioma**: Español (lang="es")
- **Descripción**: Meta tag para SEO y accesibilidad
- **Punto de montaje**: Div con id="root" donde React renderiza la aplicación
- **Script de entrada**: Carga el módulo principal desde `/src/index.jsx`

## Estructura

```html
- DOCTYPE y etiquetas HTML básicas
- Meta tags para responsive design
- Título de la página
- Contenedor #root para React
- Script de entrada (módulo ES6)
```

## Notas

Vite procesa este archivo automáticamente y lo sirve como punto de entrada de la aplicación. El script se carga como módulo ES6 para aprovechar las características modernas de JavaScript.

