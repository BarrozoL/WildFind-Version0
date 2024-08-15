import { Link } from "react-router-dom";

export default function MapListing({ matchingAnimals }) {
  const animalsArray = Array.from(matchingAnimals);

  return (
    <>
      <div className="map-sightings">
        {animalsArray.map((animal) => (
          <Link to={`/animal-list/${animal.id}`} key={animal.id}>
            <div>
              <h4 style={{ color: "green" }}>{animal.name}</h4>
              <img stylewidth="100px" src={animal.image} />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
