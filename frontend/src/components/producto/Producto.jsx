import React from 'react'

function Producto (properties) {
  return (
        <div>
            <div>{properties.nombre}</div>
            <div>{properties.precio}</div>
            <div>{properties.descripcion}</div>
        </div>
  )
}

export default Producto
