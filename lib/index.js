import axios from "axios";
const ANIMALS_DB = "https://wildfind-backendserver.adaptable.app/animals";

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
    const response = await axios.get(`${import.meta.env.ANIMALS_DB}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/* "animals": [
    {
      "typeId": 1,
      "name": "Common Blackbird",
      "description": "A medium-sized bird with an orange-yellow beak and eye-ring. The males are entirely black, while the females are dark brown.",
      "location": "Portugal"
    },
    {
      "typeId": 1,
      "name": "European Starling",
      "description": "A medium-sized passerine bird with iridescent black plumage, which in winter shows a pattern of white spots.",
      "location": "Portugal"
    },
    {
      "typeId": 1,
      "name": "House Sparrow",
      "description": "A small bird with a robust body, thick bill, and brown and gray feathers. Males have distinctive black bibs.",
      "location": "Portugal"
    },
    {
      "typeId": 1,
      "name": "Eurasian Magpie",
      "description": "A striking bird with black and white plumage and a long tail. Known for its intelligence and loud, chattering calls.",
      "location": "Portugal"
    },
    {
      "typeId": 1,
      "name": "Yellow-legged Gull",
      "description": "A large gull with a white body, gray wings, and a yellow bill with a red spot. Often seen near coastal areas.",
      "location": "Portugal"
    },
    {
      "typeId": 1,
      "name": "Feral Pigeon",
      "description": "A common urban bird with a variety of plumage colors, though typically gray with iridescent feathers on the neck.",
      "location": "Portugal"
    },
    {
      "typeId": 1,
      "name": "Eurasian Collared Dove",
      "description": "A medium-sized dove with a distinctive black neck collar. It has pale, sandy plumage and is commonly found in urban areas.",
      "location": "Portugal"
    },
    {
      "typeId": 1,
      "name": "Great Tit",
      "description": "A small passerine bird with a distinctive black head, white cheeks, and a yellow underbelly with a black stripe.",
      "location": "Portugal"
    },
    {
      "typeId": 1,
      "name": "European Robin",
      "description": "A small bird with an orange-red breast and face, brown upperparts, and a melodic song.",
      "location": "Portugal"
    },
    {
      "typeId": 1,
      "name": "Common Swift",
      "description": "A fast-flying bird with a dark, sooty-brown body, long wings, and a short, forked tail. It spends most of its life in the air.",
      "location": "Portugal"
    }
  ] */
