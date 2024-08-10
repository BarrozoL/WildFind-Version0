import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function AnimalList({ animals }) {
  return (
    <>
      <div className="animalWrapper">
        {animals.map((animal) => {
          return (
            /*  <Link to={`${ANIMALS_DB}/${animal.id}`}> */
            <div key={animal.id}>
              <p></p>
              <h3>{animal.name}</h3>
            </div>
            /*    </Link> */
          );
        })}
      </div>
    </>
  );
}
