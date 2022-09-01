import React from "react";
import Truck from "./Truck";
function TrucksContainer({ trucks }) {
  return (
    <div className="truck-container">
    <ul className="cards">
      {trucks.map(truck => (
        <Truck key={truck.id} truck={truck} />
      ))}
    </ul>
    </div>
  );
}

export default TrucksContainer;
