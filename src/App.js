import { useState } from "react";
import MoviesList from "./components/MoviesList";

const App = () => {
  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://swapi.dev/api/films");
    const data = await response.json();

    const fetchedData = data.results.map((result) => {
      return {
        id: result.episode_id,
        title: result.title,
        relaseDate: result.release_date,
        openingText: result.opening_crawl,
      };
    });
    setMovies(fetchedData);
  };

  return (
    <div>
      <button onClick={fetchData}>fetch data</button>
      <MoviesList movies={movies} />
    </div>
  );
};

export default App;
