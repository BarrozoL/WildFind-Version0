import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAnimal } from "../../lib";

export default function Sightings({ sightings }) {
  /*  const [foundAnimal, setFoundAnimal] = useState(); */
  const { animalId } = useParams();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/animal-list/${animalId}`);
  };

  const filteredSightings = sightings.filter(
    (sight) => sight.animalId === animalId
  );

  return (
    <>
      <div className="spottingWrapper">
        <h3>Sightings:</h3>

        {filteredSightings.map((sighting) => {
          const formattedDate = new Date(sighting.date).toString();

          return (
            <ul key={sighting.id} style={{ listStyleType: "nonenpm " }}>
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
