import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Header from "./Header";
import PetList from "./PetList";
import Resources from "./Resources";
import About from "./About";

function App() {
  const [allPets, setAllPets] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const addPet = (newPet) => {
    setAllPets([...allPets, newPet]);
  };

  useEffect(() => {
    fetch("https://care-keeper-back-end.herokuapp.com/pets")
      .then((response) => response.json())
      .then((allPets) => {
        setAllPets(allPets);
      });
  }, []);

  const handleDelete = (deletedPet) => {
    fetch(`https://care-keeper-back-end.herokuapp.com/pets/${deletedPet.id}`, {
      method: "Delete",
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      const updatedPets = allPets.filter((pet) => pet.id !== deletedPet.id);
      setAllPets(updatedPets);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header search={search} handleSearch={handleSearch} addPet={addPet} />
      </header>
      <main>
        <Route path="/" exact>
          <PetList
            allPets={allPets}
            search={search}
            handleDelete={handleDelete}
          />
        </Route>
        <p>
          <Route path="/resources" component={Resources} />
        </p>
        <p>
          <Route path="/about" component={About} />
        </p>
      </main>
    </div>
  );
}

export default App;
