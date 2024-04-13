import { InputAdornment, TextField } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

type Props = {
    action:Function
}

const SearchBar = ({action}: Props) => {
  return (
        <TextField
          sx={{ width: "100%" }}
          id="search"
          label="Search Movie Title"
          variant="outlined"
          size="small"
          onChange={(e) => action(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        
  )
}

export default SearchBar