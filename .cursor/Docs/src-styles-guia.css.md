# src/styles/guia.css

Estilos para el componente Guia y sus slots.

## Descripción

Define los estilos de la plantilla/guía, incluyendo los slots vacíos, ocupados, y sus estados durante el drag & drop.

## Clases Principales

### .guia
- Contenedor flex column para apilar slots verticalmente
- Gap para espaciado entre slots
- Ancho completo

### .slot
- Altura mínima igual a altura de barra
- Borde punteado para slots vacíos
- Flexbox para centrar contenido
- Transiciones suaves para cambios de estado
- Posición relativa para indicadores

## Estados

### .vacio
- Borde punteado (dashed) para indicar espacio disponible
- Fondo neutro
- Indicador visual sutil (pseudo-elemento ::before)

### .ocupado
- Borde sólido transparente
- Sin padding adicional
- La barra ocupa todo el espacio

### .drag-over
- Borde azul cuando se arrastra sobre el slot
- Fondo azul suave (rgba con opacidad)
- Escala ligeramente aumentada

### .rechazado
- Borde rojo cuando se intenta colocar barra incorrecta
- Fondo rojo suave
- Animación de rechazo (movimiento horizontal)

## Animaciones

### @keyframes rechazo
- Movimiento horizontal suave (izquierda-derecha-izquierda)
- Duración: 0.3s
- Easing: ease
- Proporciona feedback visual sin ser agresivo

## Indicadores Visuales

### Pseudo-elemento ::before (slots vacíos)
- Línea horizontal sutil
- Indica visualmente dónde se puede colocar una barra
- Opacidad reducida para no distraer

## Responsive

### Tablets (max-width: 768px)
- Altura mínima reducida a 35px

### Móviles (max-width: 480px)
- Altura mínima reducida a 30px

## Notas

- Los slots vacíos tienen un indicador visual muy sutil (principio Montessori de ambiente preparado)
- La animación de rechazo es suave y no intrusiva
- Los estados de drag-over proporcionan feedback inmediato
- Los slots ocupados se integran visualmente con las barras

