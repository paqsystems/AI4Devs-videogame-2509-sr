import React, { useState, useEffect } from 'react'
import Barra from './Barra'
import Guia from './Guia'
import '../styles/tablero.css'

/**
 * Componente Tablero - Contenedor principal que organiza el layout
 * Maneja el estado de las barras y su ordenamiento
 */
const Tablero = () => {
  const [barras, setBarras] = useState([])
  const [barrasColocadas, setBarrasColocadas] = useState([])
  const [barraArrastrandose, setBarraArrastrandose] = useState(null)
  const [modoAvanzado, setModoAvanzado] = useState(false)
  const [numeroABuscar, setNumeroABuscar] = useState(null)

  /**
   * Genera el patrón de colores alternado para una barra
   */
  const generarColorPatron = (longitud) => {
    const patron = []
    for (let i = 0; i < longitud; i++) {
      patron.push(i % 2 === 0 ? 'rojo' : 'azul')
    }
    return patron
  }

  /**
   * Genera un número aleatorio entre 1 y 10
   */
  const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 10) + 1
  }

  /**
   * Inicializa las barras en orden aleatorio
   */
  useEffect(() => {
    const barrasIniciales = Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      longitud: i + 1,
      colorPatron: generarColorPatron(i + 1),
      posicion: 'desordenada'
    }))

    // Mezclar aleatoriamente
    const barrasMezcladas = barrasIniciales.sort(() => Math.random() - 0.5)
    
    setBarras(barrasMezcladas)
  }, [])

  /**
   * Inicializa el número a buscar cuando se activa el modo avanzado
   */
  useEffect(() => {
    if (modoAvanzado) {
      setNumeroABuscar(generarNumeroAleatorio())
    } else {
      setNumeroABuscar(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modoAvanzado])

  /**
   * Maneja cuando una barra comienza a arrastrarse
   */
  const manejarDragStart = (barraId) => {
    setBarraArrastrandose(barraId)
  }

  /**
   * Maneja cuando una barra termina de arrastrarse
   */
  const manejarDragEnd = (barraId) => {
    setBarraArrastrandose(null)
  }

  /**
   * Maneja cuando una barra se coloca correctamente en un slot
   */
  const manejarBarraColocada = (barraId, slotId) => {
    // Verificar si hay otra barra en el slot destino
    const barraEnSlotDestino = barrasColocadas.find(b => b.slotId === slotId && b.barraId !== barraId)
    
    // Remover la barra que se está moviendo de su posición anterior (si estaba colocada)
    let nuevasBarrasColocadas = barrasColocadas.filter(b => b.barraId !== barraId)
    
    // Si hay una barra en el slot destino, removerla también
    if (barraEnSlotDestino) {
      nuevasBarrasColocadas = nuevasBarrasColocadas.filter(b => b.barraId !== barraEnSlotDestino.barraId)
    }

    // Agregar la barra a la nueva posición
    setBarrasColocadas([...nuevasBarrasColocadas, {
      barraId,
      slotId
    }])

    // Actualizar estado de todas las barras afectadas en una sola operación
    setBarras(barras.map(barra => {
      if (barra.id === barraId) {
        // Barra que se está colocando
        return { ...barra, posicion: { slotId } }
      } else if (barraEnSlotDestino && barra.id === barraEnSlotDestino.barraId) {
        // Barra que estaba en el slot destino - restaurar a desordenada
        return { ...barra, posicion: 'desordenada' }
      }
      return barra
    }))
  }

  /**
   * Maneja la selección de una barra en modo avanzado
   */
  const manejarSeleccionBarra = (barraId, longitud) => {
    if (!modoAvanzado || !numeroABuscar) return

    if (longitud === numeroABuscar) {
      // Barra correcta - feedback sutil y generar nuevo número
      setNumeroABuscar(generarNumeroAleatorio())
    }
    // Si es incorrecta, no hacer nada (control de error implícito)
  }

  /**
   * Obtiene las barras que están desordenadas (no colocadas)
   */
  const obtenerBarrasDesordenadas = () => {
    return barras.filter(barra => barra.posicion === 'desordenada')
  }

  const barrasDesordenadas = obtenerBarrasDesordenadas()

  return (
    <div className="tablero">
      <div className="modo-avanzado-container">
        <button
          className="boton-modo-avanzado"
          onClick={() => setModoAvanzado(!modoAvanzado)}
        >
          {modoAvanzado ? 'Desactivar' : 'Activar'} Modo Avanzado
        </button>
        {modoAvanzado && numeroABuscar && (
          <div className="numero-buscar">
            <span className="texto-buscar">Busca la barra:</span>
            <span className="numero">{numeroABuscar}</span>
          </div>
        )}
      </div>

      <div className={`area-barras ${modoAvanzado ? 'centrada' : ''}`}>
        <h2 className="titulo-area">Barras</h2>
        {barrasDesordenadas.map(barra => (
          <Barra
            key={barra.id}
            id={barra.id}
            longitud={barra.longitud}
            colorPatron={barra.colorPatron}
            colocada={false}
            modoAvanzado={modoAvanzado}
            numeroABuscar={numeroABuscar}
            onDragStart={manejarDragStart}
            onDragEnd={manejarDragEnd}
            onSeleccion={manejarSeleccionBarra}
          />
        ))}
      </div>

      {!modoAvanzado && (
        <div className="area-guia">
          <h2 className="titulo-area">Guía</h2>
          <Guia
            barrasColocadas={barrasColocadas}
            onBarraColocada={manejarBarraColocada}
            barras={barras}
          />
        </div>
      )}
    </div>
  )
}

export default Tablero

