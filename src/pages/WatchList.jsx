import { Link } from "react-router-dom";
import WatchCard from "../components/WatchCard";

export default function WatchList({ watches, deleteWatch }) {
  return (
    <>
      <div className="watchWrapper">
        <Link to="/animal-list">
          <button>View Full List of Animals</button>
        </Link>

        {watches.map((watch) => (
          <WatchCard key={watch.id} watch={watch} deleteWatch={deleteWatch} />
        ))}
      </div>
    </>
  );
}
