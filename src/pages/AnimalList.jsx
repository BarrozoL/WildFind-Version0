import { Link } from "react-router-dom";

//Receive the {animals} as a prop from the App, since the state stored and altered there.
export default function AnimalList({ animals }) {
  return (
    <>
      <div className="animalWrapper">
        {animals.map((animal) => {
          return (
            <Link to={`/animal-list/${animal.id}`}>
              <div key={animal.id}>
                <p></p>
                <h3>{animal.name}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
