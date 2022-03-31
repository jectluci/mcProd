import React from 'react'
import { useForm } from 'react-hook-form'

const AddProducts = ({ funcion }) => {
  const { register, handleSubmit } = useForm({
  })
  return (
    <form onSubmit={handleSubmit(funcion)}>
      <h3>Form de añadir producto</h3>
      <div>
        <label htmlFor=''>Nombre</label>
        <input
          type='text'
          {...register('nombre', { required: true })}
        />
      </div>
      <div>
        <label htmlFor=''>Precio</label>
        <input type='number' step='any' {...register('precio')} />
      </div>
      <div>
        <label htmlFor=''>Descripcion</label>
        <input type='text' {...register('descripcion')} />
      </div>
      <button type='submit'>Guardar Procuto</button>
    </form>
  )
}

export default AddProducts
