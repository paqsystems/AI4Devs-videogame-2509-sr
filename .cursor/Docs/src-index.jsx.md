# src/index.jsx

Punto de entrada principal de la aplicación React.

## Descripción

Este archivo inicializa la aplicación React, montándola en el DOM y cargando los estilos globales.

## Funcionalidad

1. **Importaciones**:
   - React y ReactDOM para renderizado
   - Componente App principal
   - Estilos globales CSS

2. **Renderizado**:
   - Crea un root de React usando `createRoot` (API moderna de React 18)
   - Renderiza el componente `App` dentro de `React.StrictMode`
   - `StrictMode` ayuda a detectar problemas potenciales durante el desarrollo

## Estructura

```javascript
- Importaciones de React y dependencias
- Importación del componente App
- Importación de estilos globales
- Creación del root de React
- Renderizado con StrictMode
```

## Notas

- Utiliza la API moderna `createRoot` de React 18 en lugar de `ReactDOM.render`
- `StrictMode` solo afecta en desarrollo, no en producción
- Los estilos globales se cargan aquí para estar disponibles en toda la aplicación

