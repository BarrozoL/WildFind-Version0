import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/animal-list" element={<AnimalList />} />
        <Route path="/animal-list/:id" element={<AnimalDetails />} />
        <Route path="/watch-list" element={<WatchList />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
