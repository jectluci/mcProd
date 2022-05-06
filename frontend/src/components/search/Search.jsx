import { TextField, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

export default function Search ({ inBuscador }) {
  return (

    <TextField
      label='Buscar un Producto'
      type='text'
      onChange={(event) => {
        inBuscador(event.target.value)
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <SearchIcon />
          </InputAdornment>
        )
      }}
    />
  )
}
