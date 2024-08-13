import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getWatch } from "../../lib";

function WatchDetails() {
  const [foundWatch, setFoundWatch] = useState(null);
  const { watchId } = useParams();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/watch");
  };

  useEffect(() => {
    getWatch(watchId)
      .then((data) => {
        console.log("Fetched watch:", data);
        setFoundWatch(data);
      })
      .catch((error) => console.error("Error fetching watch:", error));
  }, [watchId]);

  const handleEditNavigate = () => {
    navigate(`/watch/${watchId}/edit-watch`);
  };

  if (!foundWatch) return <p>Loading...</p>;

  return (
    <div className="watchDetailWrapper">
      <div key={foundWatch.id}>
        <img src={foundWatch.image} alt={foundWatch.name} width="300px" />
        <p>{foundWatch.name}</p>
        <p>{foundWatch.description}</p>
        <p>Native to {foundWatch.location}</p>
        <button className="editWatch-btn" onClick={handleEditNavigate}>
          Edit
        </button>
        <button onClick={handleNavigate}>Back</button>
      </div>
    </div>
  );
}

export default WatchDetails;
