import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddSpottedAnimal() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [locaiton, setLocation] = useState("");

  const navigate = useNavigate();

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

    if (!name || !description || !locaiton) {
      alert("All fields are mandatory");
    }

    const newSpotting = {
      name,
      description,
      locaiton,
    };

    /* METHOD FOR ADDING SPOTTED ANIMAL WITH API */

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
          <label>Name:</label>
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
