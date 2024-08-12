import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addAnimal } from "../../lib";

export default function AddAnimal({ AddAnimal }) {
  console.log(addAnimal);
  const [selectedAnimalType, setSelectedAnimalType] = useState("-");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const navigate = useNavigate();

  const handleSelectedAnimalType = (e) => {
    setSelectedAnimalType(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !location) {
      alert("All fields are mandatory");
    }

    const animalTypeId = 0;

    for (let i = 0; i < types.length; i++) {
      if (types[i].name === selectedAnimalType) {
        animalTypeId = types[i].id;
      }
    }

    const newAnimal = {
      typeId: animalTypeId,
      name,
      image,
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
          <label for="animalType">Animal type:</label>
          <select
            name="animalType"
            id="animalType"
            onChange={handleSelectedAnimalType}
            value={animalType}
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
      </form>
    </div>
  );
}
