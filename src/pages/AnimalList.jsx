import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

//Receive the {animals} as a prop from the App, since the state stored and altered there.
export default function AnimalList({ animals }) {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [theme, setTheme] = useState("");
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/animal-add");
  };

  const handleTypeFilter = (e) => {
    const selectedType = e.target.value;
    setType(selectedType);

    // Update the theme state based on the selected type
    if (selectedType === "Other") {
      setTheme("other-theme");
    } else {
      setTheme("");
    }
  };

  useEffect(() => {
    if (theme) {
      document.body.classList.add(theme);
    } else {
      document.body.classList.remove("other-theme");
    }
    return () => {
      document.body.classList.remove("other-theme");
    };
  }, [theme]);

  let filteredAnimals = animals.filter((animal) => {
    // Filter by type
    const typeMatch =
      !type ||
      (type === "Birds" && animal.typeId === 1) ||
      (type === "Mammals" && animal.typeId === 2) ||
      (type === "Reptiles" && animal.typeId === 3) ||
      (type === "Other" && animal.typeId === 4);

    // Filter by name
    const nameMatch = animal.name.toLowerCase().includes(search.toLowerCase());

    // Return only animals that match both filters
    return typeMatch && nameMatch;
  });

  const sortedAnimals = filteredAnimals.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <>
      <input
        className="search-bar"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="type-select-wrapper">
        <select className="type-select" onChange={handleTypeFilter}>
          <option value="">Show All Animals</option>
          <option value="Birds">Show Birds</option>
          <option value="Mammals">Show Mammals</option>
          <option value="Reptiles">Show Reptiles</option>
          <option value="Other">Show Other Animals</option>
        </select>
      </div>

      <button onClick={handleNavigate}>Add a new Animal!</button>

      <div className="animalWrapper">
        {sortedAnimals.map((animal) => {
          return (
            <Link to={`/animal-list/${animal.id}`} key={animal.id}>
              <div style={{ margin: "30px", border: "2px solid black" }}>
                <h3 style={{ color: "rgb(44,140,121)" }}>{animal.name}</h3>
                <img width="80px" src={animal.image} />
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
