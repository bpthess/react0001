import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import YoutubeCont from "../includes/YoutubeCont";
import Title from "../layout/Title";
import Touch from "../layout/Touch";

function Youtube() {
  return (
    <>
      <Header />
      <Contents>
        <Title title={["Youtube", "search"]} />
        <YoutubeCont />
        <Touch />
      </Contents>
      <Footer />
    </>
  );
}

export default Youtube;
