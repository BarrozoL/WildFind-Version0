import { Link } from "react-router-dom";
import WatchCard from "../components/WatchCard";

export default function WatchList({ watches, deleteWatch }) {
  return (
    <>
      <Link to="/animal-list">
        <button>View Full List of Animals</button>
      </Link>
      <div className="watchWrapper">
        {watches.map((watch) => (
          <WatchCard key={watch.id} watch={watch} deleteWatch={deleteWatch} />
        ))}
      </div>
    </>
  );
}
