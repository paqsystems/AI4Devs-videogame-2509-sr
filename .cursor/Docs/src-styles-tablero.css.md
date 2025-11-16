# src/styles/tablero.css

Estilos para el componente Tablero y sus áreas.

## Descripción

Define el layout responsive del tablero principal, organizando las áreas de barras y guía en diferentes configuraciones según el tamaño de pantalla.

## Clases Principales

### .tablero
- Contenedor principal con flexbox
- Layout horizontal (row) en desktop
- Padding y gap para espaciado
- Alineación y justificación centrada

### .area-barras
- Área izquierda con barras desordenadas
- Flex column para apilar barras verticalmente
- Fondo y borde para diferenciación visual
- Border radius para esquinas suaves

### .area-guia
- Área derecha con la plantilla/guía
- Misma estructura que área-barras
- Estilos consistentes para coherencia visual

### .titulo-area
- Títulos de cada área
- Tamaño y peso de fuente
- Centrado y espaciado

## Media Queries

### Tablets (max-width: 1024px)
- Reduce padding y gap
- Ajusta max-width de áreas

### Móviles (max-width: 768px)
- Cambia a layout vertical (column)
- Áreas ocupan ancho completo
- Reduce tamaño de fuente de títulos

### Móviles Pequeños (max-width: 480px)
- Padding más reducido
- Espaciado optimizado para pantallas pequeñas

## Responsive Design

- **Desktop**: Layout lado a lado (barras izquierda, guía derecha)
- **Tablet**: Layout similar pero con menos espacio
- **Móvil**: Layout vertical (barras arriba, guía abajo)

## Notas

- Utiliza flexbox para layout flexible
- Las áreas tienen max-width para evitar que se estiren demasiado en pantallas grandes
- Los estilos son progresivos: se adaptan gradualmente según el tamaño de pantalla

