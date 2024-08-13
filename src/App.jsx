import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Homepage from "./pages/Homepage";
import AnimalList from "./pages/AnimalList";
import Errorpage from "./pages/Errorpage";
import AnimalCard from "./pages/AnimalCard";
import WatchList from "./pages/WatchList";
import Sightings from "./pages/Sightings";
import WatchDetails from "./pages/WatchDetails";

import AddSighting from "./pages/AddSighting";
import EditWatchPage from "./pages/EditWatch";
import AddAnimal from "./pages/AddAnimal";

// Components
import WatchCard from "./components/WatchCard";

// Functions
import {
  getAllAnimals,
  getAllWatches,
  deleteWatchItem,
  updateWatch,
  getTypes,
  addAnimal,
  addSighting,
  getSightings,
} from "../lib";

function App() {
  const [types, setTypes] = useState([]);
  const [animals, setAnimals] = useState([]);
  const [watches, setWatches] = useState([]);
  const [sightings, setSightings] = useState([""]);
  // Get the existing types of animals
  useEffect(() => {
    getTypes().then((data) => setTypes(data));
  }, []);

  // Get all animals that exist in DB
  useEffect(() => {
    getAllAnimals()
      .then((data) => {
        console.log("Fetched animals:", data);
        setAnimals(data);
      })
      .catch((error) => console.error("Error fetching animals:", error));
  }, []);

  // Add a new animal

  const newAnimal = (animal) => {
    addAnimal(animal).then((newAnimal) => setAnimals([...animals, newAnimal]));
  };

  // Get all watching animals

  useEffect(() => {
    getAllWatches()
      .then((data) => {
        console.log("Fetched watches:", data);
        setWatches(data);
      })
      .catch((error) => console.error("Error fetching watches:", error));
  }, []);

  // Delete watching animal
  const deleteWatch = (id) => {
    deleteWatchItem(id)
      .then(() => {
        setWatches(watches.filter((watch) => watch.id !== id));
      })
      .catch((error) => console.error("Error deleting watch:", error));
  };

  // Edit watch animal
  const editWatch = (watchItem) => {
    updateWatch(watchItem)
      .then((data) => {
        setWatches(
          watches.map((watch) => (data.id === watch.id ? data : watch))
        );
      })
      .catch((error) => console.error("Error updating watch:", error));
  };

  // Get all sightings
  useEffect(() => {
    getSightings().then((data) => setSightings(data));
  }, []);

  // Add sighting
  const newSighting = (sighting) => {
    addSighting(sighting).then((newSight) =>
      setSightings([...sightings, newSight])
    );
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/animal-list" element={<AnimalList animals={animals} />} />
        <Route
          path="/animal-add"
          element={<AddAnimal types={types} addAnimal={addAnimal} />}
        />
        <Route
          path="/:animalId/add-sighting"
          element={<AddSighting animals={animals} addSighting={newSighting} />}
        />
        <Route path={`/animal-list/:animalId`} element={<AnimalCard />} />

        <Route
          path="/watch"
          element={<WatchList watches={watches} deleteWatch={deleteWatch} />}
        />
        <Route
          path="/watch/:watchId/edit-watch"
          element={<EditWatchPage editWatch={editWatch} watches={watches} />}
        />

        <Route path="/watch/:watchId/details" element={<WatchDetails />} />

        <Route
          path={`/animal-list/:animalId/sightings`}
          element={<Sightings sightings={sightings} />}
        />

        <Route
          path="/animal-add"
          element={
            <AddAnimal types={types} addAnimal={newAnimal} animals={animals} />
          }
        />

        <Route path="/*" element={<Errorpage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
