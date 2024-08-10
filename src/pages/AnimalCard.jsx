import { useState, useEffect } from "react";

export default function AnimalCard() {
  const [animal, setAnimal] = useState();

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
