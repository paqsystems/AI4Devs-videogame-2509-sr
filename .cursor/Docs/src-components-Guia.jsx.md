# src/components/Guia.jsx

Componente que representa la plantilla/guía donde se encastran las barras.

## Descripción

Componente funcional que renderiza 10 slots ordenados de menor a mayor (longitud 1 a 10). Cada slot puede recibir una barra mediante drag & drop y valida si la barra corresponde a ese slot.

## Props

- `barrasColocadas` (Array<Object>): Array de objetos { barraId, slotId } con las barras ya colocadas
- `onBarraColocada` (Function): Callback cuando una barra se coloca correctamente (barraId, slotId)
- `onBarraRemovida` (Function): Callback cuando una barra se remueve (no implementado en versión básica)
- `barras` (Array<Object>): Array completo de barras para renderizar las colocadas

## Funcionalidad

### Slots

- Crea 10 slots (uno para cada longitud 1-10)
- Cada slot tiene estados: vacío, ocupado, drag-over, rechazado

### Validación

- `manejarDrop`: Valida si la barra corresponde al slot (longitud === slotId)
- Si es correcta: llama a `onBarraColocada` para encastrar
- Si es incorrecta: muestra animación de rechazo suave

### Eventos Drag & Drop

1. **onDragOver**: 
   - Previene comportamiento por defecto
   - Establece `dropEffect` a 'move'
   - Activa estado visual `drag-over`

2. **onDragLeave**:
   - Resetea el estado `drag-over` solo si realmente se sale del slot

3. **onDrop**:
   - Procesa los datos de la barra arrastrada
   - Valida si corresponde al slot
   - Ejecuta callback o muestra rechazo

## Estados Internos

- `slotDragOver`: ID del slot sobre el que se está arrastrando
- `slotRechazado`: ID del slot que mostró rechazo (temporal)

## Renderizado

- Slots vacíos muestran un indicador visual sutil (línea punteada)
- Slots ocupados renderizan la barra correspondiente usando el componente `Barra`
- Slots con drag-over muestran feedback visual (borde azul, fondo suave)
- Slots rechazados muestran animación de rechazo (rojo, movimiento)

## Estilos

Utiliza clases CSS:
- `slot`: Base
- `vacio`: Slot sin barra
- `ocupado`: Slot con barra colocada
- `drag-over`: Durante el arrastre sobre el slot
- `rechazado`: Cuando se intenta colocar una barra incorrecta

## Notas

- El control de error es implícito: no hay mensajes, solo feedback visual
- La animación de rechazo es suave y no intrusiva
- Los slots ocupados no aceptan nuevas barras

