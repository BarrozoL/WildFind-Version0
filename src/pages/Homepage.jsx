import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>WildFind</h1>
      <button /* onClick={navigate("/animalList")} */>
        See your local animals
      </button>
      <button /* onClick={navigate("/map")} */>
        See a map of local animal sightings
      </button>
      <button /* onClick={navigate("/add")} */>
        Seen an animal? Add a new sighting!
      </button>
    </div>
  );
}
