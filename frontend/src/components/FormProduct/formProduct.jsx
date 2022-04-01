import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const AddProducts = ({ funcion, dataProducto }) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {}
  })

  useEffect(() => {
    if (dataProducto) {
      setValue('nombre', dataProducto.nombre)
      setValue('precio', dataProducto.precio)
      setValue('descripcion', dataProducto.descripcion)
    }
  }, [dataProducto])

  const pasoDatos = (data) => {
    funcion(data)
    reset()
  }
  return (
    <form onSubmit={handleSubmit(pasoDatos)}>
      <h3>Form de añadir producto</h3>
      <div>
        <label htmlFor=''>Nombre</label>
        <input type='text' {...register('nombre', { required: true })} />
        {errors.nombre?.type === 'required' && (
          <label htmlFor=''>este campo es requerio</label>
        )}
      </div>
      <div>
        <label htmlFor=''>Precio</label>
        <input
          type='number'
          step='any'
          {...register('precio', { required: true, valueAsNumber: true })}
        />
        {errors.precio?.type === 'required' && (
          <label htmlFor=''>este campo es requerio</label>
        )}
      </div>
      <div>
        <label htmlFor=''>Descripcion</label>
        <input type='text' {...register('descripcion', { required: true })} />
        {errors.descripcion?.type === 'required' && (
          <label htmlFor=''>este campo es requerio</label>
        )}
      </div>
      <button type='submit'>Guardar Procuto</button>
    </form>
  )
}

export default AddProducts
