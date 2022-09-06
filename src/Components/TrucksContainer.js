import React from "react";
import Truck from "./Truck";

function TrucksContainer({ trucks }) {
  return (
    <div id="truck-container">
      <ul id="cards">
        {trucks.map(truck => (
          <Truck key={truck.id} truck={truck} />
        ))}
      </ul>
    </div>
  );
}

export default TrucksContainer;
