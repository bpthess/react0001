import React from "react";

function MovieItem(props) {
  // {'https://image.tmdb.org/t/p/w500/' + props.results.poster_path}
  return (
    <li>
      <a
        href={`https://www.themoviedb.org/movie/${props.results.id}?language=ko`}
      >
        <img
          src={"https://image.tmdb.org/t/p/w500" + props.results.poster_path}
          alt={"https://image.tmdb.org/t/p/w500/" + props.results.title}
        />
        <p className="title">{props.results.title}</p>
      </a>
    </li>
  );
}

export default MovieItem;
