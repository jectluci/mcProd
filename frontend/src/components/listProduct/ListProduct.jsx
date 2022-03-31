const ListProduct = ({ listaProductos, onDelete, onEdit }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>descripcion</th>
            <th>precio</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {listaProductos.map((producto) => (
            <tr key={producto.id_producto}>
              <td>{producto.nombre}</td>
              <td>{producto.descripcion}</td>
              <td>{producto.precio}</td>
              <td>
                <button onClick={() => onEdit(producto)}>
                  Editar
                </button>
                <button onClick={() => onDelete(producto)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListProduct
