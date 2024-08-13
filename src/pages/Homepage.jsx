import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const handleAddNavigate = () => {
    navigate("/animal-add");
  };

  const handleMapNavigate = () => {
    navigate("/map");
  };

  const handleAnimalNavigate = () => {
    navigate("/animal-list");
  };

  return (
    <div>
      <h1>WildFind</h1>
      <button onClick={handleAnimalNavigate}>See your local animals</button>
      <button onClick={handleMapNavigate}>
        See a map of local animal sightings
      </button>
      <button onClick={handleAddNavigate}>
        Seen a new animal? Let us know about it!
      </button>
    </div>
  );
}
