import { Link } from "react-router-dom";

export default function MapListing({ matchingAnimals, location }) {
  const animalsArray = Array.from(matchingAnimals);

  /* const firstSightingLocation = animalsArray.find((animal) => {
    animal.sightings && animal.sightings[0] && animal.sightings[0].location;
  }); */

  return (
    <div className="map-wrap">
      <div className="map-sightings">
        <div>
          {" "}
          {location.length > 0 ? (
            <h2 className="location-tag">
              Animals with sightings in: {location}
            </h2>
          ) : (
            ""
          )}
        </div>
        <div className="sighting-card">
          {animalsArray.map((animal) => (
            <Link to={`/animal-list/${animal.id}`} key={animal.id}>
              <div>
                <h4 style={{ color: "rgb(44, 140, 121)", width: "100px" }}>
                  {animal.name}
                </h4>
                <img stylewidth="100px" src={animal.image} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
