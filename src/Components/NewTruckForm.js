import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function NewTruckForm() {
  return (
    <div className="input-form">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" placeholder="Year" variant="outlined" />
        <TextField id="outlined-basic" placeholder="Make" variant="outlined" />
        <br></br>

        <TextField id="outlined-basic" placeholder="Model" variant="outlined" />
        <TextField id="outlined-basic" placeholder="Image Url" variant="outlined" />
        <br></br>
        <TextField id="outlined-basic" placeholder="Mileage" variant="outlined" />
        <TextField id="outlined-basic" placeholder="Price" variant="outlined" />
        <br></br>
          <Button  className="submit-btn" variant="contained">Submit</Button>
        
      </Box>
    </div>
  );
}
export default NewTruckForm;
