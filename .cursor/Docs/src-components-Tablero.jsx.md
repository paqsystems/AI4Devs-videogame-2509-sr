# src/components/Tablero.jsx

Componente contenedor principal que organiza el layout y maneja el estado global de las barras.

## Descripción

Componente funcional que actúa como contenedor principal, organizando el layout en dos áreas: barras desordenadas (izquierda) y guía (derecha). Maneja todo el estado de las barras y su ordenamiento.

## Funcionalidad

### Inicialización

- `useEffect`: Crea 10 barras (longitud 1 a 10) al montar el componente
- Genera patrón de colores alternado para cada barra
- Mezcla las barras aleatoriamente para el orden inicial

### Estado

- `barras`: Array completo de todas las barras con sus propiedades
- `barrasColocadas`: Array de objetos { barraId, slotId } con las barras ya colocadas
- `barraArrastrandose`: ID de la barra que se está arrastrando actualmente

### Generación de Barras

- `generarColorPatron(longitud)`: Crea un array con el patrón rojo/azul alternado
- Cada barra tiene: id, longitud, colorPatron, posicion

### Manejo de Eventos

1. **manejarDragStart**: 
   - Actualiza el estado cuando una barra comienza a arrastrarse

2. **manejarDragEnd**:
   - Resetea el estado cuando termina el arrastre

3. **manejarBarraColocada**:
   - Valida si la barra ya estaba en otro slot y la remueve
   - Agrega la barra al nuevo slot
   - Actualiza el estado de la barra en el array `barras`

### Filtrado

- `obtenerBarrasDesordenadas()`: Filtra las barras que aún no están colocadas
- Solo muestra en el área izquierda las barras con `posicion === 'desordenada'`

## Layout

- **Desktop**: Layout horizontal (flex-row) con barras a la izquierda y guía a la derecha
- **Móvil**: Layout vertical (flex-column) con barras arriba y guía abajo
- Responsive mediante media queries en CSS

## Componentes Hijos

- Renderiza múltiples componentes `Barra` en el área de barras desordenadas
- Renderiza un componente `Guia` en el área de guía
- Pasa callbacks y props necesarios a los componentes hijos

## Notas

- El orden aleatorio se genera solo una vez al montar el componente
- Las barras pueden moverse entre slots si se arrastra una ya colocada
- El estado se mantiene local usando `useState` (no Context API)

