import React from "react";
import Truck from "./Truck";
function TrucksContainer({ trucks }) {
  return (
  <ul className="cards">

  {trucks.map(truck => (
    <Truck 
    key={truck.id} 
    truck={truck} />
  ))}
  </ul>
  )}

export default TrucksContainer;
