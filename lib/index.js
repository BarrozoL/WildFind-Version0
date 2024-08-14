import axios from "axios";

const ANIMALS_DB = "https://wildfind-backendserver.adaptable.app/";
//Separation of concerns; storing all of the CRUDE functions and exporting them

//GET all of the animals from database
export const getAllAnimals = async () => {
  try {
    const response = await axios.get(`${ANIMALS_DB}/animals`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//GET single animal from database
export const getAnimal = async (id) => {
  try {
    const response = await axios.get(`${ANIMALS_DB}/animals/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getTypes = async (id) => {
  try {
    const response = await axios.get(`${ANIMALS_DB}/types`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addAnimal = async (animal) => {
  try {
    const response = await axios.post(`${ANIMALS_DB}/animals`, {
      typeId: Number(animal.typeId),
      name: animal.name,
      image: animal.image,
      description: animal.description,
      location: animal.location,
    });
    console.log("Posted to animals: ", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Get sightings of an animal
export const getSightings = async () => {
  try {
    const response = await axios.get(`${ANIMALS_DB}/sightings/`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
// Add an animal sighting
export const addSighting = async (sighting) => {
  try {
    const response = await axios.post(`${ANIMALS_DB}/sightings`, {
      animalId: Number(sighting.animalId),
      location: sighting.location,
      date: sighting.date,
      description: sighting.description,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//GET watchlist from database
export const getAllWatches = async () => {
  try {
    const response = await axios.get(`${ANIMALS_DB}/watch`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//DELETE watchlist item
export const deleteWatchItem = async (id) => {
  try {
    const response = await axios.delete(`${ANIMALS_DB}/watch/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//PUT(edit) watchlist item
export const updateWatch = async (watchItem) => {
  try {
    const response = await axios.put(
      `${ANIMALS_DB}/watch/${watchItem.id}`,
      watchItem
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//POST animal to watch list

export const addToWatchList = async (
  animalId,
  name,
  image,
  description,
  location
) => {
  try {
    const response = await axios.post(`${ANIMALS_DB}/watch`, {
      animalId: animalId,
      name: name,
      image: image,
      description: description,
      location: location,
    });
    console.log("posted to watch list", response.data);
    return response.data;
  } catch (error) {
    console.log(error, "not able to post to watch list");
  }
};

//GET single watch item
export const getWatch = async (id) => {
  try {
    const response = await axios.get(`${ANIMALS_DB}/watch/${id}`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//Get animals with sightings

export const getAnimalsWithSightings = async () => {
  try {
    const response = await axios.get(`${ANIMALS_DB}/animals?_embed=sightings`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
