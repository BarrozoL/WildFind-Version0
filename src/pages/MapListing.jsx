export default function MapListing({ matchingAnimals }) {
  console.log("matchingAnimals", matchingAnimals);

  const animalsArray = Array.from(matchingAnimals);

  return (
    <>
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          right: "5%",
          top: "20%",
        }}
      >
        {animalsArray.map((animal) => (
          <div key={animal.id}>
            <p>{animal.name}</p>
            <img width="100px" src={animal.image} />
          </div>
        ))}
      </div>
    </>
  );
}
