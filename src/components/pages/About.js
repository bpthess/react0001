import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import AboutCont from "../includes/AboutCont";
import Touch from "../layout/Touch";
import Title from "../layout/Title";
import Loading from "../includes/Loading";
import { gsap } from "gsap";

function About() {
  const mainAnimation = () => {
    setTimeout(() => {
      document.getElementById("loading").classList.remove("loading__active");

      gsap.to("#header", {
        duration: 0.8,
        top: 0,
      });
      gsap.to("#footer", {
        duration: 0.8,
        bottom: 0,
        delay: 0.2,
      });
      gsap.to(".cont__title strong", {
        duration: 0.7,
        y: 0,
        opacity: 1,
        delay: 1.0,
        ease: "power4.out",
      });
      gsap.to(".cont__title em", {
        duration: 0.7,
        y: 0,
        opacity: 1,
        delay: 1.3,
        ease: "power4.out",
      });
      gsap.to(".movie__search", {
        duration: 0.7,
        y: 0,
        opacity: 1,
        delay: 1.5,
        ease: "power4.out",
      });
      gsap.to(".movie__list", {
        duration: 0.7,
        y: 0,
        opacity: 1,
        delay: 1.5,
        ease: "power4.out",
      });
    }, 2000);
  };

  mainAnimation();
  return (
    <>
      <Loading color="light" />
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
