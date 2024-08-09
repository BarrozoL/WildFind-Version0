import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const handleAnimalsNavigate = () => {
    navigate("/animalList");
  };
  const handleMapNavigate = () => {
    navigate("/map");
  };

  return (
    <div>
      <h1>WildFind</h1>
      <button onClick={handleAnimalsNavigate}>Animals</button>
      <button onClick={handleMapNavigate}>Map</button>
    </div>
  );
}
