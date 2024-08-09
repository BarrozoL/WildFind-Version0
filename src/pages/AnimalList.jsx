import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function AnimalList() {
  const [animals, setAnimals] = useState([]);

  return (
    <>
      <div className="animalWrapper">
        {animals.map((animal) => {
          return (
            /*  <Link to={`${ANIMALS_DB}/${animal.id}`}> */
            <div key={animal.id}>
              <h3>{animal.name}</h3>
            </div>
            /*    </Link> */
          );
        })}
      </div>
    </>
  );
}
