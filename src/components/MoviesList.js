import Movies from "./Movies";

const MoviesList = (props) => {
  return (
    <div>
      <ul>
        {props.movies.map((movie) => (
          <Movies
            title={movie.title}
            openingText={movie.openingText}
            relaseDate={movie.relaseDate}
          />
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
