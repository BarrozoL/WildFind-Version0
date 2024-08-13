import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addAnimal } from "../../lib";

let defaultBirdImage;
let defaultMammalImage;
let defaultReptileImage;
let defaultOtherImage;

export default function AddAnimal({ types, addAnimal, animals }) {
  console.log(addAnimal);
  const [selectedAnimalType, setSelectedAnimalType] = useState("-");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const navigate = useNavigate();

  const handleSightingNav = navigate("/add-sighting");

  const handleSelectedAnimalType = (e) => {
    setSelectedAnimalType(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const animalExists = (animal) => {
    animals.includes(
      (prevAnimal) =>
        prevAnimal.name.toLowerCase() === animal.name.toLowerCase()
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !location) {
      alert("All fields are mandatory");
      return;
    }

    if (animalExists) {
      alert(
        "This animal has already been spotted! Please add a new sighting instead"
      );
      return;
    }

    let animalTypeId = 0;

    for (let i = 0; i < types.length; i++) {
      if (types[i].name === selectedAnimalType) {
        animalTypeId = types[i].id;
      }
    }

    let img;

    if (animalTypeId === 1) {
      img = image || defaultBirdImage;
    } else if (animalTypeId === 2) {
      img = image || defaultMammalImage;
    } else if (animalTypeId === 3) {
      img = image || defaultReptileImage;
    } else {
      img = image || defaultOtherImage;
    }

    const newAnimal = {
      typeId: animalTypeId,
      name,
      image: img,
      description,
      location,
    };

    addAnimal(newAnimal);

    setName("");
    setDescription("");
    setLocation("");

    navigate("/animal-list");
  };

  return (
    <div>
      <h1>What and where did you spot?</h1>
      <form>
        <div>
          <label>Animal type:</label>

          <select
            name="animalType"
            id="animalType"
            onChange={handleSelectedAnimalType}
            value={selectedAnimalType}
          >
            <option value="bird">Bird</option>
            <option value="mammal">Mammal</option>
            <option value="reptile">Reptile</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label>Animal name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={image}
            onChange={handleImageChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={location}
            onChange={handleLocationChange}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <button onClick={handleSightingNav}>
          Add a Sighting of an existing animal
        </button>
      </form>
    </div>
  );
}
