import { useState } from 'react'
import './AccionesCarrito.css'

function AccionesCarrito({ stock }) {

    const [items, setItems] = useState(1)

    const añadirProducto = () => {
        if (items < stock) {
            setItems(items + 1)
        }
    }

    const quitarProducto = () => {
        if (items > 1) {
            setItems(items - 1)
        }
    }

  return (
    <div className='d-flex align-items-center'>
        <button className='elementoCarrito botonCarrito botonCambiar' onClick={quitarProducto}>-</button>
        <h3 className='subtitulosDetalleProductos elementoCarrito'>{items}</h3>
        <button className='elementoCarrito botonCarrito botonCambiar' onClick={añadirProducto}>+</button>
        <button className='botonCarrito botonAñadir'>Añadir</button>
    </div>
  )
}

export default AccionesCarrito