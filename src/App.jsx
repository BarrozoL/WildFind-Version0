import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//Pages
import Homepage from "./pages/Homepage";
import AnimalList from "./pages/AnimalList";
import Error from "./pages/Errorpage";
import AnimalCard from "./pages/AnimalCard";
import WatchList from "./pages/WatchList";

//Functions
import { getAllAnimals, getAnimal } from "../lib";
import EditWatchPage from "./pages/EditWatch";

function App() {
  const [animals, setAnimals] = useState([]);
  /*   const { animalId } = useParams(); */

  useEffect(() => {
    getAllAnimals().then((data) => setAnimals(data));
  }, []);

  /*   useEffect(() => {
    getAnimal(animalId);
  }, []); */

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/animal-list" element={<AnimalList animals={animals} />} />
        {/*  <Route path="/animal-list/:id" element={<AnimalCard />} /> */}
        {/*   <Route path="/watch-list" element={<WatchList />} /> */}
        <Route path="/watch" element={<WatchList />} />
        <Route path="watch/:watchId/editWatch" element={<EditWatchPage />} />
        <Route path="/*" element={<Error />} />
      </Routes>

      <Footer />
    </Router>
  );
}
export default App;
