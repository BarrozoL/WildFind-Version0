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

//POST animal to watch list

export const addToWatchList = async (animalId, name, description, location) => {
  try {
    const response = await axios.post(`${ANIMALS_DB}/watch`, {
      animalId: animalId,
      name: name,
      description: description,
      location: location,
    });
    console.log("posted to watch list", response.data);
    return response.data;
  } catch (error) {
    console.log(error, "not able to post to watch list");
  }
};
