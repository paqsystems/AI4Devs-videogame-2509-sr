# src/components/Barra.jsx

Componente que representa una barra individual de número Montessori.

## Descripción

Componente funcional que renderiza una barra arrastrable con patrón de colores rojo/azul alternado. Implementa la funcionalidad de drag & drop usando la API HTML5 nativa.

## Props

- `id` (number): Identificador único de la barra
- `longitud` (number): Longitud de la barra (1-10), determina el ancho
- `colorPatron` (Array<string>): Array con el patrón de colores ['rojo','azul',...]
- `colocada` (boolean): Indica si la barra ya está colocada en la guía (no arrastrable)
- `onDragStart` (Function): Callback cuando comienza el arrastre
- `onDragEnd` (Function): Callback cuando termina el arrastre

## Funcionalidad

### Drag & Drop HTML5

1. **onDragStart**: 
   - Previene arrastre si la barra está colocada
   - Establece los datos de la barra en `dataTransfer`
   - Notifica al componente padre

2. **onDragEnd**:
   - Maneja el retorno suave si la barra no se colocó correctamente
   - Resetea el estado de arrastre
   - Notifica al componente padre

### Renderizado

- Genera segmentos dinámicos según la longitud
- Cada segmento tiene el color correspondiente del patrón
- Aplica estilos CSS dinámicos usando variables CSS (`--longitud`)

## Estados Internos

- `isDragging`: Indica si la barra está siendo arrastrada
- `isRetornando`: Indica si la barra está retornando a su posición (animación)

## Estilos

Utiliza la clase `barra` con modificadores:
- `dragging`: Cuando está siendo arrastrada
- `colocada`: Cuando ya está en la guía
- `retornando`: Durante la animación de retorno

## Notas

- Las barras colocadas no son arrastrables (cursor: default)
- La animación de retorno se activa automáticamente si el drop falla
- Los segmentos se generan dinámicamente según la longitud de la barra

