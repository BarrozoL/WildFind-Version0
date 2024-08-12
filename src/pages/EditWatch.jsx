import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Navigate } from "react-router-dom";

// const API_URL = "https://wildfind-backendserver.adaptable.app/watch";

function EditWatchPage({ editWatch, watches }) {
  const { watchId } = useParams();

  const foundWatch = watches.find((watch) => watch.id === Number(watchId));

  if (!foundWatch) return <Navigate to="/watch" />;

  const navigate = useNavigate();
  const [name, setName] = useState(foundWatch.name);
  const [description, setDescription] = useState(foundWatch.description);
  const [location, setLocation] = useState(foundWatch.location);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const updatedWatch = {
      ...foundWatch,
      name,
      description,
      location,
    };
    editWatch(updatedWatch);

    navigate("/watch");
  };

  return (
    <div>
      <h3>Edit Watch Item</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={handleDescriptionChange}
        />
        <label>Location:</label>
        <textarea
          name="location"
          value={location}
          onChange={handleLocationChange}
        />
        <button type="submit">Update Watch Item</button>
      </form>
    </div>
  );
}

export default EditWatchPage;
