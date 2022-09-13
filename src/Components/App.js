import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./static/Home";
import NavBar from "./NavBar";
import TrucksContainer from "./TrucksContainer";
import AboutUs from "./static/AboutUs";
import NewTruckForm from "./NewTruckForm";

function App() {
  const [trucks, setTrucks] = useState([]);

  fetch("http://localhost:3000/trucks")
    .then(r => r.json())
    .then(allTrucks => {
      setTrucks(allTrucks);
    });

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/aboutus">
          <AboutUs />
        </Route>
        <Route path="/trucks">
          <TrucksContainer trucks={trucks} />
        </Route>
        <Route path="/truck/new">
          <NewTruckForm trucks={trucks} setTrucks={setTrucks} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
