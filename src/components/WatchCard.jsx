import { Link } from "react-router-dom";

function WatchCard({ watch, deleteWatch }) {
  return (
    <li className="WatchCard">
      <Link to={`/watch-list/${watch.id}`}>
        <h3>{watch.name}</h3>
        <p>{watch.description}</p>
        <p>{watch.location}</p>
      </Link>
      <Link className="editWatch-btn" to={`/watch-list/${watch.id}/editWatch`}>
        Edit
      </Link>
      <button onClick={() => deleteWatch(watch.id)}>X</button>
    </li>
  );
}

export default WatchCard;
