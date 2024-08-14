import { useState, useEffect } from "react";

import "./Map.css";
import Map from "../components/Map";
import MapListing from "./MapListing";

export default function MapPage({
  sightings,
  animals,
  getAnimalsWithSightings,
}) {
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
        /* console.log("match", matchingAnimals); */
      }
    });
  });

  return (
    <>
      <Map findLocation={findLocation} />
      <MapListing matchingAnimals={matchingAnimals} />
    </>
  );
}

//Code was "working" before
/* function findMatchingAnimal(e) {
  {
    console.log(e.target.id);
  }
  let filteredMapSightings = sightings.filter(
    (sight) => sight.location === e.target.id
  );

  filteredMapSightings.map((sight) => {
    setCurrentAnimal(
      animals.find((animal) => animal.id === Number(sight.animalId))
    );
    {
      currentAnimal.map((animal) => {
        console.log("name", animal.name);
      });
    }
  });
  console.log("111", currentAnimal);
} */
