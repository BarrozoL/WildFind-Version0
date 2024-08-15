import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAnimal } from "../../lib";

export default function Sightings({ sightings, getAnimalsWithSightings }) {
  const [sights, setSights] = useState();
  const { animalId } = useParams();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/animal-list/${animalId}`);
  };

  const filteredSightings = sightings.filter(
    (sight) => Number(sight.animalId) === Number(animalId)
  );

  useEffect(() => {
    getAnimalsWithSightings().then((data) => setSights(data));
  }, []);

  return (
    <>
      <div className="spottingWrapper">
        <h3>Sightings:</h3>

        {filteredSightings.map((sighting) => {
          const formattedDate = new Date(sighting.date).toString();
          console.log(filteredSightings);
          return (
            <ul key={sighting.id} style={{ listStyleType: "none" }}>
              {sighting.image && sighting.image.trim() !== "" && (
                <img src={sighting.image} alt="image of sighting" />
              )}
              <li>{sighting.location}</li>
              <li>{formattedDate}</li>
              <li>{sighting.description}</li>
              <br />
              <br />
            </ul>
          );
        })}
      </div>

      <button onClick={handleNavigate}>Back</button>
    </>
  );
}
