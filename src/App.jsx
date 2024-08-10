import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import AnimalList from "./pages/AnimalList";
import { getAllAnimals, getAnimal } from "../lib";

function App() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    getAllAnimals().then((data) => setAnimals(data));
  }, []);

  return (
    <>
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/animal-list" element={<AnimalList />} />
        <Route path="/animal-list/:id" element={<AnimalDetails />} />
        <Route path="/watch-list" element={<WatchList />} />
      </Routes>
      <Footer /> */}
      <AnimalList animals={animals} />
    </>
  );
}
export default App;
