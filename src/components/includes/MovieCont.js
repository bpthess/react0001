import React from "react";
import MovieItem from "./MovieItem";

function MovieCont(props) {
  //console.log(props);
  return (
    <ul>
      {props.videos.map((list, index) => (
        <MovieItem key={index} results={list} />
      ))}
    </ul>
  );
}

export default MovieCont;
