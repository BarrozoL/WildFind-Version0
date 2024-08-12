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

  const handleWatchNavigate = () => {
    navigate("/watch");
  };

  useEffect(() => {
    getAnimal(animalId).then((data) => setFoundAnimal(data));
  }, []);

  const handleSightingNavigate = () => {
    navigate(`/animal-list/${animalId}/sightings`);
  };

  const handleAddToWatchList = async () => {
    try {
      const response = await addToWatchList(
        animalId,
        foundAnimal.name,
        foundAnimal.image,
        foundAnimal.description,
        `Native to ${foundAnimal.location}`
      );
      handleWatchNavigate();
      location.reload(); //do something about this... maybe useState and spread
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
        <h3>{foundAnimal.name}</h3>
        <img src={foundAnimal.image} alt={foundAnimal.name} width="300px" />
        <p>{foundAnimal.description}</p>
        <p>Native to {foundAnimal.location}</p>
        <button onClick={handleNavigate}>Back</button>
        <button onClick={handleAddToWatchList}>Add to Watch List</button>
        <button onClick={handleSightingNavigate}>
          Click to view locations where the {`${foundAnimal.name}`} has been
          seen
        </button>
      </div>
    </>
  );
}
