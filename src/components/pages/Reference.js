import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import ReferCont from "../includes/ReferCont";
import Title from "../layout/Title";
import Touch from "../layout/Touch";

function Reference() {
  return (
    <>
      <Header />
      <Contents>
        <Title title={["Reference", "Book"]} />
        <ReferCont />
        <Touch />
      </Contents>
      <Footer />
    </>
  );
}

export default Reference;
