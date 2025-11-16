# src/styles/global.css

Archivo de estilos globales y variables CSS para toda la aplicación.

## Descripción

Define las variables CSS (custom properties) con los colores y valores base del diseño Montessori, así como un reset básico y estilos globales para el body y root.

## Variables CSS

### Colores
- `--color-rojo`: #e74c3c - Color rojo Montessori
- `--color-azul`: #3498db - Color azul Montessori
- `--color-fondo`: #f5f5f5 - Color de fondo principal
- `--color-fondo-claro`: #fafafa - Color de fondo para áreas
- `--color-borde`: #ddd - Color de bordes sutiles
- `--color-texto`: #333 - Color del texto

### Dimensiones
- `--ancho-barra-base`: 50px - Ancho base para calcular longitud de barras
- `--altura-barra`: 40px - Altura estándar de las barras

### Transiciones
- `--transicion-suave`: transform 0.3s ease, opacity 0.3s ease - Transición estándar

## Reset Básico

- `* { box-sizing: border-box }`: Asegura que padding y border se incluyan en el ancho
- Reset de margin y padding a 0

## Estilos Globales

### Body
- Fuente del sistema para mejor rendimiento
- Antialiasing para texto suave
- Fondo y color de texto base

### Root
- Ancho completo y altura mínima de viewport

## Mejoras Touch

- Elimina el highlight azul al tocar en móviles
- Desactiva el menú contextual al mantener presionado

## Notas

- Las variables CSS permiten fácil personalización y mantenimiento
- Los colores siguen la paleta Montessori clásica
- Las transiciones son consistentes en toda la aplicación

