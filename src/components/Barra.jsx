import React, { useState } from 'react'
import '../styles/barra.css'

/**
 * Componente Barra - Representa una barra de número Montessori
 * @param {Object} props
 * @param {number} props.id - Identificador único de la barra
 * @param {number} props.longitud - Longitud de la barra (1-10)
 * @param {Array<string>} props.colorPatron - Patrón de colores alternado ['rojo','azul',...]
 * @param {boolean} props.colocada - Indica si la barra ya está colocada en la guía
 * @param {boolean} props.modoAvanzado - Indica si el modo avanzado está activo
 * @param {number} props.numeroABuscar - Número que se está buscando en modo avanzado
 * @param {Function} props.onDragStart - Callback cuando comienza el arrastre
 * @param {Function} props.onDragEnd - Callback cuando termina el arrastre
 * @param {Function} props.onSeleccion - Callback cuando se selecciona la barra en modo avanzado
 */
const Barra = ({ id, longitud, colorPatron, colocada, modoAvanzado, numeroABuscar, onDragStart, onDragEnd, onSeleccion }) => {
  const [isDragging, setIsDragging] = useState(false)
  const [isRetornando, setIsRetornando] = useState(false)
  const [seleccionada, setSeleccionada] = useState(false)
  const [incorrecta, setIncorrecta] = useState(false)

  /**
   * Maneja el inicio del arrastre
   */
  const manejarDragStart = (e) => {
    if (colocada) {
      e.preventDefault()
      return
    }
    
    setIsDragging(true)
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/plain', JSON.stringify({ id, longitud }))
    
    if (onDragStart) {
      onDragStart(id)
    }
  }

  /**
   * Maneja el fin del arrastre
   */
  const manejarDragEnd = (e) => {
    setIsDragging(false)
    
    // Si la barra no se colocó correctamente, retorna suavemente
    if (!colocada && e.dataTransfer.dropEffect === 'none') {
      setIsRetornando(true)
      setTimeout(() => {
        setIsRetornando(false)
      }, 300)
    }
    
    if (onDragEnd) {
      onDragEnd(id)
    }
  }

  /**
   * Maneja el click en la barra en modo avanzado
   */
  const manejarClick = () => {
    if (!modoAvanzado || colocada) return

    if (longitud === numeroABuscar) {
      // Barra correcta - feedback sutil
      setSeleccionada(true)
      setTimeout(() => {
        setSeleccionada(false)
      }, 300)
      
      if (onSeleccion) {
        onSeleccion(id, longitud)
      }
    } else {
      // Barra incorrecta - feedback implícito muy sutil
      setIncorrecta(true)
      setTimeout(() => {
        setIncorrecta(false)
      }, 200)
    }
  }

  // Generar segmentos de la barra según el patrón de colores
  const segmentos = colorPatron.slice(0, longitud).map((color, index) => (
    <div
      key={index}
      className={`segmento ${color}`}
      style={{ width: `${100 / longitud}%` }}
    />
  ))

  const clasesBarra = [
    'barra',
    isDragging && 'dragging',
    colocada && 'colocada',
    isRetornando && 'retornando',
    modoAvanzado && !colocada && 'seleccionable',
    seleccionada && 'correcta',
    incorrecta && 'incorrecta'
  ].filter(Boolean).join(' ')

  return (
    <div
      className={clasesBarra}
      style={{ '--longitud': longitud }}
      draggable={!colocada && !modoAvanzado}
      onDragStart={manejarDragStart}
      onDragEnd={manejarDragEnd}
      onClick={manejarClick}
    >
      {segmentos}
    </div>
  )
}

export default Barra

