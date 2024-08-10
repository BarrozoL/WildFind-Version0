import axios from "axios";
const ANIMALS_DB = "https://wildfind-backendserver.adaptable.app/animals";
//Separation of concerns; storing all of the CRUDE functions and exporting them

//GET all of the animals from database
export const getAllAnimals = async () => {
  try {
    const response = await axios.get(`${ANIMALS_DB}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//GET single animal from database
export const getAnimal = async (id) => {
  try {
    const response = await axios.get(`${ANIMALS_DB}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
