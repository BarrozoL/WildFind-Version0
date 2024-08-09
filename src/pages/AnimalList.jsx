import { useState, useEffect } from "react";
import axios from "axios";

export default function AnimalList() {
  const [animals, setAnimals] = useState([]);

  const ANIMALS_DB = "https://wildfind-backendserver.adaptable.app/animals";

  useEffect(() => {
    getAllAnimals();
  }, []);

  const getAllAnimals = async () => {
    try {
      const response = await axios.get(ANIMALS_DB);
      return setAnimals(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="animalWrapper">
        {animals.map((animal) => {
          return (
            <div key={animal.id}>
              <h3>{animal.name}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
}
