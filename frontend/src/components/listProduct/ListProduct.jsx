import React, { useEffect, useState } from 'react'
import { Producto } from '../../components'

function ListProduct () {
  const [productos, setProductos] = useState()

  const listado = async () => {
    fetch('http://localhost:3001/grupomc/products')
      .then((res) => res.json())
      .then((res) => setProductos(res))
  }

  useEffect(() => {
    listado()
  }, [])

  return (
        <div>
            {productos.map((producto) => (
                <Producto
                    key={producto.id_producto}
                    nombre={producto.nombre}
                    precio={producto.precio}
                    descripcion={producto.descripcion}
                />
            ))}
        </div>
  )
}

export default ListProduct
