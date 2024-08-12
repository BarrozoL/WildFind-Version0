import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { addToWatchList, getAnimal } from "../../lib";

export default function AnimalCard() {
  const [foundAnimal, setFoundAnimal] = useState();
  const { animalId } = useParams();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/animal-list");
  };

  useEffect(() => {
    getAnimal(animalId).then((data) => setFoundAnimal(data));
  }, []);

  const handleAddToWatchList = async () => {
    try {
      const response = await addToWatchList(
        animalId,
        foundAnimal.name,
        foundAnimal.description,
        foundAnimal.location
      );
      console.log("animal added to watch list", response);
    } catch (error) {
      console.log(error, "can't add to watch list");
    }
  };

  if (!foundAnimal) return <p>Loading...</p>;

  return (
    <>
      <div className="animalDetailWrapper">
        <div key={foundAnimal.id}></div>
        <p>{foundAnimal.name}</p>
        <p>{foundAnimal.description}</p>
        <p>{foundAnimal.location}</p>
        <button onClick={handleNavigate}>Back</button>
        <button onClick={handleAddToWatchList}>Add to Watch List</button>
      </div>
    </>
  );
}
