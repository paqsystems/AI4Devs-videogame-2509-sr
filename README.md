# Barras de Número Montessori

Aplicación web interactiva desarrollada en React que simula el material educativo Montessori "Barras de Número" (Number Rods).

## 🎯 Descripción

Esta aplicación permite a los niños:
- Arrastrar barras de diferente longitud
- Ordenarlas de menor a mayor en una guía o plantilla
- Recibir control de error implícito (rechazo suave si la barra no corresponde)
- Explorar libremente sin puntos, premios, ni tiempos

## 🛠️ Tecnologías

- **React 18** - Framework de UI
- **Vite** - Herramienta de construcción
- **HTML5 Drag and Drop** - API nativa para arrastrar y soltar
- **CSS3** - Estilos responsive y animaciones suaves

## 📦 Instalación

```bash
npm install
```

## 🚀 Desarrollo

```bash
npm run dev
```

La aplicación se abrirá en `http://localhost:5173`

## 🏗️ Construcción

```bash
npm run build
```

## 📂 Estructura del Proyecto

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

## 🎨 Características

- **Diseño Responsive**: Funciona en desktop, tablets y móviles
- **Compatibilidad**: Compatible con Chrome, Firefox, Safari, Edge y Opera
- **Animaciones Suaves**: Transiciones CSS para movimientos naturales
- **Control de Error Implícito**: Sin mensajes intrusivos, solo feedback visual suave
- **Principios Montessori**: Autonomía, auto-corrección y ambiente preparado

## 📝 Licencia

Este proyecto es de código abierto y está disponible para uso educativo.
