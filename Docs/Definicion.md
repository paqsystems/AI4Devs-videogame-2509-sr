📘 contexto.md – Proyecto “Barras de Números Montessori” (React + HTML + CSS)
🎯 Objetivo general del proyecto

Desarrollar una aplicación web simple, en español, que simule el material Montessori “Barras de Número” (Number Rods).
El niño debe poder:

Arrastrar barras de diferente longitud.

Ordenarlas de menor a mayor en una “guía” o plantilla.

Recibir control de error implícito (rechazo suave si la barra no corresponde).

Explorar libremente sin puntos, premios, ni tiempos.

Usar una interfaz limpia, calma y minimalista.

El estilo general debe transmitir calma, autonomía y auto–corrección, coherente con la pedagogía Montessori.

📐 Principios pedagógicos a respetar

Autonomía

No usar mensajes como “¡Correcto!”, “¡Error!”, ni forzar secuencias rígidas.

No usar tiempos, puntajes, vidas, ni medallas.

Control de error implícito

Si la barra no corresponde, simplemente vuelve a su lugar.

La correcta encaja suavemente.

Ambiente preparado y limpio

Colores suaves.

Nada de animaciones ruidosas o distractoras.

Tipografía simple y clara.

De lo concreto a lo abstracto

Las barras se presentan primero sin números.

Opcionalmente un “modo avanzado” donde aparece un número a buscar.

🛠️ Estándares técnicos obligatorios

🔤 Lenguaje y convenciones

Código y comentarios en español.

Variables, funciones y métodos en camelCase.

Componentes React en PascalCase.

Archivos CSS separados por componente.

Separación estricta entre HTML/JSX, CSS y lógica React.

📂 Estructura recomendada del proyecto
/src
  /components
      Barra.jsx
      Guia.jsx
      Tablero.jsx
  /styles
      barra.css
      guia.css
      tablero.css
  App.jsx
  index.jsx
/public
  index.html
contexto.md

🌐 Frontend – Criterios específicos

Framework: React con functional components.

Uso de hooks (useState, useEffect) cuando sea necesario.

Para drag & drop:

Permitirle a Cursor elegir entre

API HTML5 Drag and Drop,

o una librería simple como react-dnd.

Pero SIEMPRE mantener el comportamiento Montessori (sin mensajes intrusivos).

Las barras deben ser rectángulos horizontales con longitud proporcional (p. ej. 50px × n).

Colores Montessori clásicos: rojo y azul alternado por segmento.

🎨 Detalles funcionales del juego
Barras

Cada barra es un objeto:
{
  id: 1,
  longitud: 1, // hasta 10
  colorPatron: ['rojo','azul','rojo','azul', ...]
}

Tablero

Lado izquierdo: barras desordenadas.

Lado derecho: “guía” con espacios vacíos donde encastrarlas.

Reglas del juego

Si la barra se suelta en una posición incorrecta → vuelve a su origen.

Si es correcta → se encastra suavemente.

Cuando todas están colocadas, simplemente queda armado.

NO mostrar mensajes de victoria.

Requisitos de simplicidad

Interfaz de una sola pantalla.

Sin rutas, sin login, sin configuración.

Código claro, modular y con comentarios que expliquen la lógica.

