import "./Map.css";

export default function Map({ animals, sightings }) {
  let filteredMapSightings = sightings.filter(
    (sight) => sight.location === "Lisbon"
  );

  return (
    <>
      <img src="src\assets\images\Portugal-nuts-map.jpg" />
      <div className="mapRegions">
        <div className="map-sightings">
          {filteredMapSightings.map((sight) => {
            const animal = animals.find(
              (animal) => animal.id === Number(sight.animalId)
            );

            return (
              <div key={sight.id}>
                <img src={animal.image} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
