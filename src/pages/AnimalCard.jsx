import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAnimal } from "../../lib";

export default function AnimalCard() {
  const [foundAnimal, setFoundAnimal] = useState(null);

  useEffect(() => {
    getAnimal().then((data) => setFoundAnimal(data));
  }, []);

  return (
    <>
      <div className="animalDetailWrapper">
        <div key={foundAnimal.id}></div>
        <p>{foundAnimal.name}</p>
        <p>{foundAnimal.description}</p>
        <p>{foundAnimal.location}</p>
        <button onClick={""}>Add to Watch List</button>
      </div>
    </>
  );
}
