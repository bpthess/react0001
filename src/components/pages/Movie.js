import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import MovieCont from "../includes/MovieCont";
import Title from "../layout/Title";
import Touch from "../layout/Touch";

function Movie() {
  return (
    <>
      <Header />
      <Contents>
        <Title title={["Movie", "search"]} />
        <MovieCont />
        <Touch />
      </Contents>
      <Footer />
    </>
  );
}

export default Movie;
