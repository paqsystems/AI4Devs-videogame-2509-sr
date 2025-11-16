import React, { useState } from 'react'
import Barra from './Barra'
import '../styles/guia.css'

/**
 * Componente Guia - Plantilla con slots para encastrar las barras
 * @param {Object} props
 * @param {Array<Object>} props.barrasColocadas - Array de barras ya colocadas { barraId, slotId }
 * @param {Function} props.onBarraColocada - Callback cuando una barra se coloca correctamente
 * @param {Function} props.onBarraRemovida - Callback cuando una barra se remueve de un slot
 * @param {Array<Object>} props.barras - Array completo de barras para renderizar las colocadas
 */
const Guia = ({ barrasColocadas, onBarraColocada, onBarraRemovida, barras }) => {
  const [slotDragOver, setSlotDragOver] = useState(null)
  const [slotRechazado, setSlotRechazado] = useState(null)

  // Crear array de 10 slots (longitud 1 a 10)
  const slots = Array.from({ length: 10 }, (_, i) => i + 1)

  /**
   * Obtiene la barra colocada en un slot específico
   */
  const obtenerBarraEnSlot = (slotId) => {
    const colocada = barrasColocadas.find(b => b.slotId === slotId)
    if (colocada) {
      return barras.find(b => b.id === colocada.barraId)
    }
    return null
  }

  /**
   * Maneja el evento dragover para permitir el drop
   */
  const manejarDragOver = (e, slotId) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
    setSlotDragOver(slotId)
  }

  /**
   * Maneja cuando el drag sale del slot
   */
  const manejarDragLeave = (e) => {
    // Solo resetear si realmente salimos del slot (no de un hijo)
    if (e.currentTarget === e.target) {
      setSlotDragOver(null)
    }
  }

  /**
   * Maneja el drop de una barra en un slot
   */
  const manejarDrop = (e, slotId) => {
    e.preventDefault()
    setSlotDragOver(null)

    try {
      const datos = JSON.parse(e.dataTransfer.getData('text/plain'))
      const { id: barraId, longitud } = datos

      // Validar si la barra corresponde a este slot
      if (longitud === slotId) {
        // Barra correcta - encastrar (incluso si el slot está ocupado, permite reemplazo)
        if (onBarraColocada) {
          onBarraColocada(barraId, slotId)
        }
      } else {
        // Barra incorrecta - rechazar suavemente
        setSlotRechazado(slotId)
        setTimeout(() => {
          setSlotRechazado(null)
        }, 300)
      }
    } catch (error) {
      console.error('Error al procesar drop:', error)
    }
  }

  return (
    <div className="guia">
      {slots.map((slotId) => {
        const barraEnSlot = obtenerBarraEnSlot(slotId)
        const estaOcupado = !!barraEnSlot
        const estaDragOver = slotDragOver === slotId
        const estaRechazado = slotRechazado === slotId

        const clasesSlot = [
          'slot',
          estaOcupado ? 'ocupado' : 'vacio',
          estaDragOver && 'drag-over',
          estaRechazado && 'rechazado'
        ].filter(Boolean).join(' ')

        return (
          <div
            key={slotId}
            className={clasesSlot}
            onDragOver={(e) => manejarDragOver(e, slotId)}
            onDragLeave={manejarDragLeave}
            onDrop={(e) => manejarDrop(e, slotId)}
          >
            {estaOcupado && (
              <Barra
                id={barraEnSlot.id}
                longitud={barraEnSlot.longitud}
                colorPatron={barraEnSlot.colorPatron}
                colocada={true}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Guia

