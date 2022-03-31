import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import { ListProduct, FormProduct } from './components'

function App () {
  const [listaProductos, setListaProductos] = useState([])
  const [producto, setProducto] = useState()

  const listado = () => {
    const url = 'http://localhost:3001/grupomc/products'
    axios.get(url).then(({ data }) => setListaProductos(data))
  }
  useEffect(listado, [])

  const addProducto = async (values) => {
    const url = 'http://localhost:3001/grupomc/products/'
    axios.post(url, values).then(() => listado())
  }
  const updateProduct = async (values) => {
    const url = `http://localhost:3001/grupomc/products/${values.id_producto}`
    axios.post(url, values).then(() => {
      setProducto()
      listado()
    })
  }
  const eliminarProducto = (producto) => {
    const url = `http://localhost:3001/grupomc/products/${producto.id_producto}`
    axios.delete(url).then(() => listado())
  }

  return (
    <div className='App'>
      <div>
        <ListProduct
          listaProductos={listaProductos}
          onDelete={eliminarProducto}
          onEdit={(producto) => setProducto(producto)}
        />
      </div>
      <div>
        <FormProduct funcion={addProducto} />
      </div>
    </div>
  )
}

export default App
