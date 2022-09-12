import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function Truck({ truck }) {

  return (
    <div>
      <Card>
        <CardMedia
          component="img"
          height="250"
          image={truck.url}
          alt={truck.make}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {truck.year} {truck.make} {truck.model}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Exterior Color: {truck.color}
            <br></br>
            Mileage: {truck.mileage}
            <br></br>
            Price: ${truck.price}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
export default Truck;
