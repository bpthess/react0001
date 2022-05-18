import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import MainCont from "../includes/MainCont";

function Main() {
  return (
    <>
      <Header />
      <Contents>
        <MainCont />
      </Contents>
      <Footer />
    </>
  );
}

export default Main;
