import { Link } from "react-router-dom";

export default function PlantList({ plants }) {
  return (
    <>
      <div className="animalWrapper">
        {plants.map((plant) => {
          return (
            <Link to={`/plant-list/${plant.id}`}>
              <div className="animal-cards" key={plant.id}>
                <h3 style={{ color: "rgb(44,140,121)" }}>{plant.name}</h3>
                <img src={plant.image} />
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
