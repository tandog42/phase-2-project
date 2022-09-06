import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

function NewTruckForm({ trucks, setTrucks }) {
  const [make, setMake] = useState("");
  const [year, setYear] = useState("");
  const [model, setModel] = useState("");
  const [url, setUrl] = useState("");
  const [mileage, setMileage] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const history = useHistory();

  function onSubmitHandler(e) {
    e.preventDefault();
    const newTruck = {
      year: year,
      make: make,
      model: model,
      color: color,
      url: url,
      mileage: mileage,
      price: price,
    };

    fetch("http://localhost:3000/trucks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTruck),
    })
      .then(r => r.json())
      .then(newruck => {
        setTrucks([...trucks, newruck]);
        history.push("/trucks");
      });
  }
  return (
    <div id="input-form">
      <Box
        component="form"
        onSubmit={onSubmitHandler}
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          placeholder="Year"
          value={year}
          onChange={e => setYear(e.target.value)}
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          placeholder="Make"
          value={make}
          onChange={e => setMake(e.target.value)}
          variant="outlined"
        />
        <br></br>

        <TextField
          id="outlined-basic"
          placeholder="Model"
          value={model}
          onChange={e => setModel(e.target.value)}
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          placeholder="Exterior Color"
          value={color}
          onChange={e => setColor(e.target.value)}
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          placeholder="Image Url"
          value={url}
          onChange={e => setUrl(e.target.value)}
          variant="outlined"
        />
        <br></br>
        <TextField
          id="outlined-basic"
          placeholder="Mileage"
          value={mileage}
          onChange={e => setMileage(e.target.value)}
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          placeholder="Price"
          value={price}
          onChange={e => setPrice(e.target.value)}
          variant="outlined"
        />
        <br></br>
        <Button type="submit" className="submit-btn" variant="contained">
          Submit
        </Button>
      </Box>
    </div>
  );
}
export default NewTruckForm;
