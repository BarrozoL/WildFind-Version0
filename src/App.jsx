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

//Functions
import {
  getAllAnimals,
  getAllWatches,
  deleteWatchItem,
  updateWatch,
} from "../lib";
import EditWatchPage from "./pages/EditWatch";

function App() {
  const [animals, setAnimals] = useState([]);
  /*   const [animal, setAnimal] = useState(); */
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    getAllAnimals().then((data) => setAnimals(data));
  }, []);

  useEffect(() => {
    getAllWatches().then((data) => setWatches(data));
  }, []);

  const deleteWatch = (id) => {
    deleteWatchItem(id).then((data) =>
      setWatches(watches.filter((watch) => watch.id !== id))
    );
  };

  const editWatch = (watchItem) => {
    updateWatch(watchItem).then((data) =>
      setWatches(watches.map((watch) => (data.id === watch.id ? data : watch)))
    );
  };

  /*   useEffect(() => {
    getAnimal(animalId);
  }, []); */

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/animal-list" element={<AnimalList animals={animals} />} />
        <Route path={`/animal-list/:animalId`} element={<AnimalCard />} />
        {/*   <Route path="/watch-list" element={<WatchList />} /> */}

        <Route
          path="/watch-list"
          element={<WatchList watches={watches} deleteWatch={deleteWatch} />}
        />
        <Route
          path="/watch-list/:watchId/editWatch"
          element={<EditWatchPage editWatch={editWatch} watches={watches} />}
        />
        <Route path="/*" element={<Errorpage />} />
      </Routes>

      <Footer />
    </Router>
  );
}
export default App;
