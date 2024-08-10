import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function AnimalCard() {
  const [animal, setAnimal] = useState();
  const { animalId } = useParams();

  useEffect(() => {
    getAnimal(animalId);
  }, []);

  return (
    <>
      <div className="animalDetailWrapper">
        <div key={animal.id}></div>
        <p>{animal.description}</p>
        <p>{animal.location}</p>
        <button onClick={""}>Add to Watch List</button>
      </div>
    </>
  );
}
