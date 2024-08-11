import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const API_URL = "https://wildfind-backendserver.adaptable.app/watch";

function EditWatchPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const { watchId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/${watchId}`)
      .then((response) => {
        const watch = response.data;
        setName(watch.name);
        setDescription(watch.description);
        setLocation(watch.location);
      })
      .catch((error) => console.log(error));
  }, [watchId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const requestBody = { name, description, location };

    axios.put(`${API_URL}/${watchId}`, requestBody).then(() => {
      navigate(`/watch/${watchId}`);
    });
  };

  const deleteWatch = () => {
    axios
      .delete(`${API_URL}/${watchId}`)
      .then(() => {
        navigate("/watch");
      })
      .catch((err) => console.log(err));
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
          onChange={(e) => setName(e.target.value)}
        />
        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Location:</label>
        <textarea
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">Update Watch Item</button>
      </form>
      <button onClick={deleteWatch}>Delete Watch</button>
    </div>
  );
}

export default EditWatchPage;
