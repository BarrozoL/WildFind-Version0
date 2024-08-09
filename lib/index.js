import axios from "axios";

export const getAllAnimals = async () => {
  try {
    const response = await axios.get(`${import.meta.env.ANIMALS_DB}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAnimal = async (id) => {
  try {
    const response = await axios.get(`${import.meta.env.ANIMALS_DB}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
