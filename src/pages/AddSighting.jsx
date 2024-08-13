import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AddSighting({ animals, addSighting }) {
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const animalId = useParams().animalId;
  const animalNumber = Number(animalId) - 1;
  console.log(animals);

  const navigate = useNavigate();

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!location || !date || !description) {
      alert("All fields are mandatory");
      return;
    }

    const newSpotting = {
      animalId,
      location,
      date,
      description,
    };

    addSighting(newSpotting);

    /* METHOD FOR ADDING SPOTTED ANIMAL WITH API */

    setDescription("");
    setLocation("");

    navigate("/animal-list");
  };

  return (
    <div>
      <h1>Where and when did you spot {`${animals[animalNumber].name}`}?</h1>
      <form>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={location}
            onChange={handleLocationChange}
          />
        </div>
        <div>
          <DatePicker selected={date} onChange={handleDateChange} />
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
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
