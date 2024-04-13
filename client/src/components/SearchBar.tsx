import { TextField } from '@mui/material'
import React from 'react'

type Props = {
    action:Function
}

const SearchBar = ({action}: Props) => {
  return (
        <TextField sx={{
            width:"90%"
        }} id="search" label="Search Movie Title" variant="outlined" size='small' onChange={(e)=>action(e.target.value)} />
        
  )
}

export default SearchBar