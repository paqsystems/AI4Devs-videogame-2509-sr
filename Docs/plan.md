# Plan de Implementación - Barras de Número Montessori

## Estructura del Proyecto

Crear proyecto React desde cero con la siguiente estructura:

```
/src
  /components
    Barra.jsx          # Componente individual de barra arrastrable
    Guia.jsx           # Componente de la plantilla/guía donde encastrar
    Tablero.jsx        # Componente contenedor principal
  /styles
    barra.css          # Estilos de las barras
    guia.css           # Estilos de la guía
    tablero.css        # Estilos del tablero
    global.css         # Estilos globales y variables CSS
  App.jsx              # Componente principal
  index.jsx            # Punto de entrada
/public
  index.html           # HTML base
```

## Componentes Principales

### Tablero.jsx

- Contenedor principal que organiza el layout
- Lado izquierdo: área de barras desordenadas (orden aleatorio inicial)
- Lado derecho: área de guía con espacios para encastrar
- Usa `useState` para manejar:
  - Array de barras con sus posiciones (desordenadas vs colocadas)
  - Estado de cada espacio en la guía (ocupado/vacío)

### Barra.jsx

- Rectángulo horizontal con longitud proporcional (50px × longitud)
- Patrón de colores rojo/azul alternado por segmentos
- Implementa HTML5 Drag and Drop:
  - `draggable={true}`
  - `onDragStart` para guardar datos de la barra
  - `onDragEnd` para resetear si no se encastró correctamente
- Estilos dinámicos basados en `longitud` (1-10)

### Guia.jsx

- Plantilla con 10 espacios (slots) ordenados de menor a mayor
- Cada slot tiene:
  - `onDragOver` y `onDrop` para recibir barras
  - Validación: solo acepta la barra correcta
  - Feedback visual suave (encastre correcto vs rechazo)
- Visualización de espacios vacíos como guías sutiles

## Funcionalidades Clave

### Drag & Drop HTML5

- Implementar eventos nativos: `dragstart`, `dragover`, `drop`, `dragend`
- Prevenir comportamiento por defecto en `dragover`
- Validar en `drop` si la barra corresponde al slot
- Si es incorrecta: animación suave de retorno al origen
- Si es correcta: animación suave de encastre en el slot

### Control de Error Implícito

- Sin mensajes de "correcto" o "error"
- Rechazo suave: la barra vuelve a su posición original
- Aceptación suave: la barra se encastra y queda fija

### Animaciones

- Transiciones CSS suaves para movimientos
- `transition: transform 0.3s ease, opacity 0.3s ease`
- Sin animaciones ruidosas o distractoras

## Estilos y Diseño

### Colores Montessori

- Rojo: `#e74c3c` o similar suave
- Azul: `#3498db` o similar suave
- Fondo: tonos neutros claros (beige, gris muy claro)
- Bordes sutiles

### Responsive Design

- Media queries para tablets y móviles
- Layout flexible: en móviles, barras arriba y guía abajo
- Tamaños de barras proporcionales según viewport
- Touch-friendly para dispositivos táctiles

### Compatibilidad Navegadores

- Prefijos CSS cuando sea necesario
- Polyfills si se requieren para drag & drop en navegadores antiguos
- Testing en Chrome, Firefox, Safari, Edge, Opera

## Datos y Estado

### Estructura de Datos

```javascript
{
  id: número único,
  longitud: 1-10,
  colorPatron: ['rojo','azul','rojo','azul',...],
  posicion: 'desordenada' | { slotId: número }
}
```

### Estado Inicial

- Array de 10 barras (longitud 1 a 10)
- Orden aleatorio en el área de desordenadas
- Todos los slots de la guía vacíos

## Archivos a Crear

1. **package.json** - Dependencias React y scripts
2. **public/index.html** - HTML base con meta tags responsive
3. **src/index.jsx** - Punto de entrada con ReactDOM.render
4. **src/App.jsx** - Componente raíz
5. **src/components/Tablero.jsx** - Lógica principal y layout
6. **src/components/Barra.jsx** - Componente de barra arrastrable
7. **src/components/Guia.jsx** - Componente de guía con slots
8. **src/styles/global.css** - Variables CSS y reset básico
