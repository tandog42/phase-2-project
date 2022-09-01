import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function NewTruckForm() {

  return (

<Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField id="outlined-basic" label="Year" variant="outlined" />
      <TextField id="outlined-basic" label="Make" variant="outlined" />
     
      <TextField id="outlined-basic" label="Model" variant="outlined" />
      <TextField id="outlined-basic" label="Image Url" variant="outlined" />
      <TextField id="outlined-basic" label="Mileage" variant="outlined" />
      <TextField id="outlined-basic" label="Price" variant="outlined" />
      <Stack spacing={2} direction="row">
      <Button variant="contained">Submit</Button>
      
    </Stack>
  
    </Box>
  );
}
export default NewTruckForm