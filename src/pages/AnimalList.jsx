const ANIMALS_DB = "https://wildfind-backendserver.adaptable.app/animals";
import { Link } from "react-router-dom";

//Receive the {animals} as a prop from the App, since the state stored and altered there.
export default function AnimalList({ animals }) {
  return (
    <>
      <div className="animalWrapper">
        {animals.map((animal) => {
          return (
            <Link to={`${ANIMALS_DB}/${animal.id}`}>
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
