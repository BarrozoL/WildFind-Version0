import { Link, useNavigate } from "react-router-dom";

function WatchCard({ watch, deleteWatch }) {
  console.log("WatchCard props:", watch);
  const navigate = useNavigate();

  const handleEditNavigate = () => {
    navigate(`/watch/${watch.id}/edit-watch`);
  };

  return (
    <li className="WatchCard" style={{ listStyleType: "none" }}>
      <div style={{ margin: "30px", border: "2px solid black" }}>
        <Link to={`/watch/${watch.id}/details`}>
          <h3 style={{ color: "rgb(44,140,121)" }}>{watch.name}</h3>
          <img width="80px" src={watch.image} />
        </Link>
        <br />
        <div style={{ marginBottom: "10px" }}>
          <button className="editWatch-btn" onClick={handleEditNavigate}>
            Edit
          </button>
          <button onClick={() => deleteWatch(watch.id)}>X</button>
        </div>
      </div>
    </li>
  );
}

export default WatchCard;
