import { useState } from "react";
import { Link } from "react-router-dom";

//Receive the {animals} as a prop from the App, since the state stored and altered there.
export default function AnimalList({ animals }) {
  const [search, setSearch] = useState("");

  const filteredAnimals =
    search.length === 0
      ? animals
      : animals.filter((animal) =>
          animal.name.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <>
      <input
        className="search-bar"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="animalWrapper">
        {filteredAnimals.map((animal) => {
          return (
            <Link to={`/animal-list/${animal.id}`} key={animal.id}>
              <div style={{ margin: "30px", border: "2px solid black" }}>
                <h3 style={{ color: "white" }}>{animal.name}</h3>
                <img width="80px" src={animal.image} />
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
