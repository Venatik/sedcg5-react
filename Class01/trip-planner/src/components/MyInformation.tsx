function MyInformation() {
  const fullName = "Stefan Trajkovski";
  const favoriteMovies = ["Star Wars", "Lord of the Rings", "The Dark Knight"];

  return (
    <div>
      <h3>My full name is: {fullName}</h3>
      <ol>
        {favoriteMovies.map(favoriteMovie => (
          <li key={favoriteMovie}>{favoriteMovie}</li>
          // Key is a React prop that is used to uniquely identify elements in a list
        ))}
      </ol>
    </div>
  );
}

export default MyInformation;
