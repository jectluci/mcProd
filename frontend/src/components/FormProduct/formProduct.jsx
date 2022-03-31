import React from 'react'
import { useForm } from 'react-hook-form'

const AddProducts = (props) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      nombre: props.nombre,
      precio: props.precio,
      descripcion: props.descripcion
    }
  })
  const addProducto = async (values) => {
    fetch('http://localhost:3001/grupomc/products/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    })
  }
  return (
        <form onSubmit={handleSubmit(addProducto)}>
            <h3>Form de añadir producto</h3>
            <div>
                <label htmlFor="">Nombre</label>
                <input
                    type="text"
                    {...register('nombre', {
                      required: true
                    })}
                />
            </div>
            <div>
                <label htmlFor="">Precio</label>
                <input type="number" {...register('precio')} />
            </div>
            <div>
                <label htmlFor="">Descripcion</label>
                <input type="text" {...register('descripcion')} />
            </div>
            <button
                type="submit"
                onClick={() => {
                  reset()
                }}
            >
                Guardar Procuto
            </button>
        </form>
  )
}

export default AddProducts
