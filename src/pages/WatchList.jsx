import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import WatchCard from "../components/WatchCard";

const ANIMALS_DB = "https://wildfind-backendserver.adaptable.app/watch";

export default function WatchList() {
  const [watches, setWatches] = useState([]);

  const getAllWatches = () => {
    axios
      .get(ANIMALS_DB)
      .then((response) => setWatches(response.data))
      .catch((error) => console.log(error));
  };

  const deleteWatch = (id) => {
    axios
      .delete(`${ANIMALS_DB}/${id}`)
      .then(() => {
        setWatches((prevWatches) =>
          prevWatches.filter((watch) => watch.id !== id)
        );
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllWatches();
  }, []);

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

// <Card key={item._id} item={item} deleteFunc={deleteItem} />;

// import { useState } from "react";
// import "./Listing.css";
// import Card from "./Card";

// export default function Listing({ data, deleteItem }) {
//   const [category, setCategory] = useState("");

//   const handleCategoryFilter = (e) => {
//     setCategory(e.target.value);
//   };

//   return (
//     <div className="wrapper">
//       <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//         <h5>Filter by Bootcamp:</h5>
//         <div className="category-select-wrapper">
//           <select name={category} onChange={handleCategoryFilter}>
//             <option value="">All</option>
//             <option value="Web Development">Web Development</option>
//             <option value="UX/UI Design">UX/UI Design</option>
//             <option value="Data Analytics">Data Analytics</option>
//           </select>
//         </div>
//       </div>
//       <ul>
//         {data.map((item) => {
//           if (category === "" || item.bootcamp === category) {
//             return <Card key={item._id} item={item} deleteFunc={deleteItem} />;
//           }
//         })}
//       </ul>
//     </div>
//   );
// } //Mono sets ids to _id for some reason... make sure key={item._id} not {item.id}
// //this makes sure all students have unique id
