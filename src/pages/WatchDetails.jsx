import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getWatch } from "../../lib";

function WatchDetails() {
  const [foundWatch, setFoundWatch] = useState(null);
  const { watchId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getWatch(watchId)
      .then((data) => {
        console.log("Fetched watch:", data);
        setFoundWatch(data);
      })
      .catch((error) => console.error("Error fetching watch:", error));
  }, [watchId]);

  useEffect(() => {
    if (foundWatch && foundWatch.typeId === 8) {
      document.body.classList.add("other-theme");
    } else {
      document.body.classList.remove("other-theme");
    }

    // Cleanup function
    return () => {
      document.body.classList.remove("other-theme");
    };
  }, [foundWatch]);

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
        <h3>{foundWatch.name}</h3>
        <img src={foundWatch.image} alt={foundWatch.name} width="300px" />
        <p>{`Danger Level: ${foundWatch.dangerLevel}`}</p>
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
