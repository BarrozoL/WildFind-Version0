import "./Map.css";
import Map from "../components/Map";

export default function MapPage({ animals, sightings }) {
  let filteredMapSightings = sightings.filter(
    (sight) => sight.location === "Lisbon"
  );

  return (
    <>
      <Map />
    </>
  );
}
