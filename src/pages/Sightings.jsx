import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAnimal } from "../../lib";

export default function Sightings({ sightings }) {
  const { animalId } = useParams();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/animal-list");
  };

  const filteredSightings = sightings.filter(
    (sight) => sight.animalId === animalId
  );

  return (
    <>
      <div className="spottingWrapper">
        <h3>Sightings:</h3>

        {filteredSightings.map((sighting) => {
          return (
            <ul key={sighting.id}>
              <li>{sighting.location}</li>
              <li>{sighting.date}</li>
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
