import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button
} from '@mui/material'

const ListProduct = ({ listaProductos, onDelete, onEdit }) => {
  return (
    <div>
      <TableContainer sx={{ width: '800px' }} component={Paper}>
        <Table size='small'>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Descripcion</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Opciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listaProductos.map((producto) => (
              <TableRow key={producto.id_producto}>
                <TableCell>{producto.nombre}</TableCell>
                <TableCell>{producto.descripcion}</TableCell>
                <TableCell>{producto.precio}</TableCell>
                <TableCell>
                  <Button color='secondary' onClick={() => onEdit(producto)}>
                    Editar
                  </Button>
                  <Button color='error' onClick={() => onDelete(producto)}>
                    Eliminar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ListProduct
