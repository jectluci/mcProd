import React, { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { TextField, Button, Typography } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup
  .object({
    nombre: yup.string().required('Este campo es requerido'),
    precio: yup
      .number('este campo tiene que ser un numero')
      .positive('')
      .required('Este campo es requerido'),
    descripcion: yup.string().required('Este campo es requerido')
  })
  .required()

const AddProducts = ({ funcion, dataProducto }) => {
  const {
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: { nombre: '', precio: '', descripcion: '' },
    resolver: yupResolver(schema)
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
        <Controller
          control={control}
          name='nombre'
          render={({ field: { onChange, onBlur, value, name, ref } }) => (
            <TextField
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              name={name}
              ref={ref}
              placeholder='Nombre'
              type='text'
              margin='dense'
              error={Boolean(errors.nombre)}
              helperText={errors.nombre?.message}
            />
          )}
        />
      </div>
      <div>
        <Controller
          control={control}
          name='precio'
          render={({ field: { onChange, onBlur, value, name, ref } }) => (
            <TextField
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              name={name}
              ref={ref}
              placeholder='Precio'
              margin='dense'
              error={Boolean(errors.precio)}
              helperText={errors.precio?.message}
            />
          )}
        />
      </div>
      <div>
        <Controller
          control={control}
          name='descripcion'
          render={({ field: { onChange, onBlur, value, name, ref } }) => (
            <TextField
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              name={name}
              ref={ref}
              placeholder='Descripcion'
              type='text'
              margin='dense'
              multiline
              error={Boolean(errors.descripcion)}
              helperText={errors.descripcion?.message}
            />
          )}
        />
      </div>
      <Button type='submit' variant='contained' color='success'>
        Guardar Procuto
      </Button>
    </form>
  )
}

export default AddProducts
