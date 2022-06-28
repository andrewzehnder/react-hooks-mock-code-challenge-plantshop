import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

useEffect(() => {
  fetch("http://localhost:6001/plants")
  .then((r) => r.json())
  .then((plants) => setPlants(plants))
}, []);

function handleAddPlant(newPlant) {
  setPlants([
    ...plants, newPlant
  ])
}

function handleSearch(event) {
  setSearch(event.target.value)
}

let plantsList = plants.filter((plant) => {
  if (search === "") {
    return true;
  }
  else {
    const name = plant.name.toUpperCase();
    return name.includes(search.toLocaleUpperCase())
  }
})

  return (
    <div className="app">
      <Header />
      <PlantPage plants= { plantsList } onAddPlant={handleAddPlant} search={ search } onSearch={ handleSearch }/>
    </div>
  );
}

export default App;
