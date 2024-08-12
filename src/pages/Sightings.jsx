import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAnimal } from "../../lib";

export default function Sightings() {
  const [foundAnimal, setFoundAnimal] = useState();
  const { animalId } = useParams();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/animal-list");
  };

  useEffect(() => {
    getAnimal(animalId).then((data) => setFoundAnimal(data));
  }, [animalId]);

  if (!foundAnimal) return <p>Loading...</p>;

  return (
    <>
      <div className="spottingWrapper">
        <h3>Sightings:</h3>
        <ul>
          {foundAnimal.sightings.map((sighting, index) => (
            <li key={index}>{sighting}</li>
          ))}
        </ul>
      </div>

      <button onClick={handleNavigate}>Back</button>
    </>
  );
}
