import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import AboutCont from "../includes/AboutCont";
import Touch from "../layout/Touch";
import Title from "../layout/Title";

function About() {
  return (
    <>
      <Header color="light" />
      <Contents>
        <Title title={["About", "me"]} color="light" />
        <AboutCont color="light" />
        <Touch />
      </Contents>
      <Footer color="light" />
    </>
  );
}

export default About;
