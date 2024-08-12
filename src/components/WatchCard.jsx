import { Link, useNavigate } from "react-router-dom";

function WatchCard({ watch, deleteWatch }) {
  console.log("WatchCard props:", watch);
  const navigate = useNavigate();

  const handleEditNavigate = () => {
    navigate(`/watch/${watch.id}/edit-watch`);
  };

  return (
    <li className="WatchCard">
      <Link to={`/watch/${watch.id}/details`}>
        <img src={watch.image} alt={watch.name} width={100} height={100} />
        <h3>{watch.name}</h3>
      </Link>
      <button className="editWatch-btn" onClick={handleEditNavigate}>
        Edit
      </button>
      <button onClick={() => deleteWatch(watch.id)}>X</button>
    </li>
  );
}

export default WatchCard;
