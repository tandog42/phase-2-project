import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import TrucksContainer from "./TrucksContainer";
import AboutUs from "./AboutUs";
import NewTruckForm from "./NewTruckForm";

function App() {
  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/trucks")
      .then(r => r.json())
      .then(truck => {
        setTrucks(truck);
      });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/aboutus">
          <AboutUs />
        </Route>

        <Route path="/trucks">
          <TrucksContainer trucks={trucks} />
        </Route>
        <Route path="/new">
          <NewTruckForm trucks={trucks} setTrucks={setTrucks} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
