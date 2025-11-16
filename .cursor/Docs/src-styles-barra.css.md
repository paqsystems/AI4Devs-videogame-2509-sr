# src/styles/barra.css

Estilos para el componente Barra y sus estados.

## Descripción

Define los estilos de las barras individuales, incluyendo el patrón de colores, estados de drag & drop, y animaciones.

## Clases Principales

### .barra
- Ancho dinámico basado en variable CSS `--longitud`
- Altura fija estándar
- Flexbox para organizar segmentos
- Cursor grab/grabbing según estado
- Transiciones suaves para animaciones
- Box shadow para profundidad sutil
- User-select none para evitar selección de texto

### .segmento
- Cada segmento ocupa una fracción del ancho total
- Bordes sutiles entre segmentos
- Colores alternados (rojo/azul)

### .segmento.rojo
- Color de fondo rojo Montessori

### .segmento.azul
- Color de fondo azul Montessori

## Estados

### .dragging
- Opacidad reducida durante el arrastre
- Escala ligeramente aumentada
- Z-index alto para estar sobre otros elementos

### .colocada
- Cursor default (no arrastrable)
- Opacidad reducida para indicar que está fija

### .retornando
- Activa transición suave para animación de retorno

## Animaciones

- Transiciones CSS para movimientos suaves
- Sin animaciones ruidosas o distractoras
- Efectos sutiles que no interrumpen la concentración

## Responsive

### Tablets (max-width: 768px)
- Ancho base reducido a 40px
- Altura reducida a 35px

### Móviles (max-width: 480px)
- Ancho base reducido a 30px
- Altura reducida a 30px

## Notas

- El ancho se calcula dinámicamente: `calc(var(--ancho-barra-base) * var(--longitud))`
- Los segmentos se generan dinámicamente en el componente
- Las barras son touch-friendly en dispositivos móviles
- Los estados visuales proporcionan feedback sin ser intrusivos

