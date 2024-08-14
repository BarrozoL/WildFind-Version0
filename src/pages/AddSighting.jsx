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
    if (!date || !description) {
      alert("All fields are mandatory");
      return;
    }
    const newSpotting = {
      animalId,
      location,
      date,
      description,
    };

    console.log(date);

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
          <select
            value={location}
            name="location"
            onChange={handleLocationChange}
          >
            <option value="">Select a location</option>
            <option value="Aveiro">Aveiro</option>
            <option value="Beja">Beja</option>
            <option value="Braga">Braga</option>
            <option value="Bragança">Bragança</option>
            <option value="Castelo Branco">Castelo Branco</option>
            <option value="Coimbra">Coimbra</option>
            <option value="Évora">Évora</option>
            <option value="Faro">Faro</option>
            <option value="Guarda">Guarda</option>
            <option value="Leiria">Leiria</option>
            <option value="Lisboa">Lisboa</option>
            <option value="Porto">Porto</option>
            <option value="Portalegre">Portalegre</option>
            <option value="Santarém">Santarém</option>
            <option value="Setúbal">Setúbal</option>
            <option value="Viana do Castelo">Viana do Castelo</option>
            <option value="Vila Real">Vila Real</option>
            <option value="Viseu">Viseu</option>
          </select>
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
