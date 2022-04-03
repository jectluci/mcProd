import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { TextField, Button, Typography } from '@mui/material'

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
      <Typography variant='h2' component='h2'>
        Form de añadir producto
      </Typography>
      <div>
        <TextField
          label='Nombre'
          type='text' {...register('nombre', { required: true })}
          margin='dense'
        />
        {errors.nombre?.type === 'required' && (
          <label htmlFor=''>este campo es requerio</label>
        )}
      </div>
      <div>
        <TextField
          label='Precio'
          type='number'
          step='any'
          {...register('precio', { required: true, valueAsNumber: true })}
          margin='dense'
        />
        {errors.precio?.type === 'required' && (
          <label htmlFor=''>este campo es requerio</label>
        )}
      </div>
      <div>
        <TextField
          label='Descripcion'
          type='text' {...register('descripcion', { required: true })}
          margin='dense'
        />
        {errors.descripcion?.type === 'required' && (
          <label htmlFor=''>este campo es requerio</label>
        )}
      </div>
      <Button type='submit' variant='contained' color='success'>Guardar Procuto</Button>
    </form>
  )
}

export default AddProducts
