# src/App.jsx

Componente raíz de la aplicación.

## Descripción

Componente funcional simple que actúa como contenedor principal y renderiza el componente `Tablero`, que contiene toda la lógica y UI del juego.

## Funcionalidad

- Renderiza el componente `Tablero` que contiene toda la funcionalidad principal
- Actúa como punto de entrada lógico para futuras extensiones (rutas, contexto global, etc.)

## Estructura

```javascript
- Componente funcional App
- Renderiza Tablero dentro de un div con clase "app"
```

## Notas

Este componente está diseñado para ser simple y extensible. Si en el futuro se necesita agregar funcionalidades globales (como un header, footer, o contexto compartido), este es el lugar apropiado para hacerlo.

