import { Link } from "react-router-dom";

function WatchCard({ watch, deleteWatch }) {
  return (
    <li className="WatchCard">
      <Link to={`/watch/${watch.id}`}>
        <h3>{watch.name}</h3>
        <p>{watch.description}</p>
        <p>{watch.location}</p>
      </Link>
      <Link className="editWatch-btn" to={`/watch/${watch.id}/editWatch`}>
        O
      </Link>
      <button onClick={() => deleteWatch(watch.id)}>X</button>
    </li>
  );
}

export default WatchCard;
