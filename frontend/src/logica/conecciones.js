const listado = async () => {
  const url = 'http://localhost:3001/grupomc/products'
  const respuesta = await fetch(url, { method: 'GET' })
  const respuestaJson = await respuesta.json()
  return await respuestaJson
}

const addProducto = async (values) => {
  fetch('http://localhost:3001/grupomc/products/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values)
  })
}

module.exports = { listado, addProducto }
