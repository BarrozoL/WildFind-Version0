import { useState, useEffect } from "react";

import "./Map.css";
import Map from "../components/Map";
import MapListing from "./MapListing";

export default function MapPage({ getAnimalsWithSightings }) {
  const [location, setLocation] = useState([]);
  const [animalSightings, setAnimalSightings] = useState([]);

  useEffect(() => {
    getAnimalsWithSightings().then((data) => setAnimalSightings(data));
  }, [setLocation]);

  function findLocation(e) {
    setLocation(e.target.id);
  }

  /*  let matchingAnimals = []; */

  let matchingAnimals = new Set([]);

  animalSightings.map((animal) => {
    animal.sightings.map((sight) => {
      if (location === sight.location) {
        matchingAnimals.add(animal);
      }
    });
  });

  return (
    <>
      <Map findLocation={findLocation} />
      <MapListing location={location} matchingAnimals={matchingAnimals} />
    </>
  );
}
