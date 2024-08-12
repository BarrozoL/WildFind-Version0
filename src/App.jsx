import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//Pages
import Homepage from "./pages/Homepage";
import AnimalList from "./pages/AnimalList";
import Errorpage from "./pages/Errorpage";
import AnimalCard from "./pages/AnimalCard";
import WatchList from "./pages/WatchList";
import AddSighting from "./pages/AddSighting";
import EditWatchPage from "./pages/EditWatch";
import AddAnimal from "./pages/AddAnimal";

//components
import WatchCard from "./components/WatchCard";

//Functions
import {
  getAllAnimals,
  getAllWatches,
  deleteWatchItem,
  updateWatch,
  getTypes,
  addAnimal,
} from "../lib";

function App() {
  const [types, setTypes] = useState([]);
  const [animals, setAnimals] = useState([]);
  const [watches, setWatches] = useState([]);

  // Get the existing types of animals
  useEffect(() => {
    getTypes().then((data) => setTypes(data));
  }, []);

  // Get all animals that exist in DB
  useEffect(() => {
    getAllAnimals().then((data) => setAnimals(data));
  }, []);

  // Add a new animal
  const addAnimal = (animal) => {
    addAnimal(animal).then((newAnimal) => setAnimals([...animals, newAnimal]));
  };
  // Get all watching animals
  useEffect(() => {
    getAllWatches().then((data) => setWatches(data));
  }, []);

  // Delete watching animal
  const deleteWatch = (id) => {
    deleteWatchItem(id).then((data) =>
      setWatches(watches.filter((watch) => watch.id !== id))
    );
  };

  // Edit watch animal
  const editWatch = (watchItem) => {
    updateWatch(watchItem).then((data) =>
      setWatches(watches.map((watch) => (data.id === watch.id ? data : watch)))
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
          path="/add-sighting"
          element={<AddSighting animals={animals} />}
        />
        <Route path={`/animal-list/:animalId`} element={<AnimalCard />} />
        {/*   <Route path="/watch" element={<WatchList />} /> */}

        <Route
          path="/watch"
          element={<WatchList watches={watches} deleteWatch={deleteWatch} />}
        />
        <Route
          path="/watch/:watchId/edit-watch"
          element={<EditWatchPage editWatch={editWatch} watches={watches} />}
        />

        <Route path="/watch/:watchId" element={<WatchCard />} />
        <Route path="/*" element={<Errorpage />} />
      </Routes>

      <Footer />
    </Router>
  );
}
export default App;
