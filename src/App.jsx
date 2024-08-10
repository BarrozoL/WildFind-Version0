import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import AnimalList from "./pages/AnimalList";



import Errorpage from "./pages/Errorpage";

function App() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    getAllAnimals().then((data) => setAnimals(data));
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/animal-list" element={<AnimalList />} />
        <Route path="/animal-list/:id" element={<AnimalDetails />} />
        <Route path="/watch-list" element={<WatchList />} />
        <Route path="/*" element={<Errorpage />} />
      </Routes>

      <Footer />
    </Router>
  );
}
export default App;
