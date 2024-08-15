import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPlant } from "../../lib";

export default function PlantDetails() {
  const [foundPlant, setFoundPlant] = useState();
  const { plantId } = useParams();

  useEffect(() => {
    getPlant(plantId).then((data) => {
      console.log("Fetched plant data:", data, plantId);
      setFoundPlant(data);
    });
  }, [plantId]);

  if (!foundPlant) return <p>Loading...</p>;

  return (
    <div className="animalDetailWrapper" key={foundPlant.id}>
      {console.log(foundPlant)}
      <h3>{foundPlant.name}</h3>
      <img src={foundPlant.image} />
      <p>{foundPlant.description}</p>
      <p>Native to {foundPlant.location}</p>
      <p>{foundPlant.edible}</p>
    </div>
  );
}
