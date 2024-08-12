import axios from "axios";
const ANIMALS_DB = "https://wildfind-backendserver.adaptable.app";
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
export const deleteWatchItem = async () => {
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
