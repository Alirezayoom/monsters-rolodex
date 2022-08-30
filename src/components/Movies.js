const Movies = (props) => {
  return (
    <div>
      <li>
        <h2>{props.title}</h2>
        <h3>{props.relaseDate}</h3>
        <p>{props.openingText}</p>
      </li>
    </div>
  );
};

export default Movies;
