import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import MainCont from "../includes/MainCont";
import Loading from "../includes/Loading";
import axios from "axios";
import { gsap } from "gsap";

class Main extends React.Component {
  state = {
    isLoading: true,
    // ports: [],
  };

  mainAnimation = () => {
    setTimeout(() => {
      gsap.to("#header", {
        duration: 1.2,
        top: 0,
      });
      gsap.to("#footer", {
        duration: 1.2,
        delay: 1.6,
        bottom: 0,
      });
      gsap.to(".main__inner > div:nth-child(1)", {
        duration: 0.6,
        y: 0,
        opacity: 1,
        ease: "back.out(2.2)",
        delay: 1.2,
      });
      gsap.to(".main__inner > div:nth-child(2)", {
        duration: 0.6,
        y: 0,
        opacity: 1,
        ease: "back.out(2.2)",
        delay: 1.5,
      });
      gsap.to(".main__inner > div:nth-child(3)", {
        duration: 0.6,
        y: 0,
        opacity: 1,
        ease: "back.out(2.2)",
        delay: 1.8,
      });
      gsap.to(".main__inner > div:nth-child(4)", {
        duration: 0.6,
        y: 0,
        opacity: 1,
        ease: "back.out(2.2)",
        delay: 2.1,
      });
    }, 100);
  };

  getPorts = async () => {
    const {
      data: {
        data: { ports },
      },
    } = await axios.get(
      "https://webstoryboy.github.io/dothome1/portfolio.json"
    );

    //console.log(ports);
    setTimeout(() => {
      console.log("첫번째 시작");
      this.setState({ isLoading: false, ports: ports });
      this.mainAnimation();
    }, 1600);
  };

  componentDidMount() {
    setTimeout(() => {
      console.log("두번째 시작");
      document.getElementById("loading").classList.remove("loading__active");
      this.getPorts();
    }, 2000);
  }

  render() {
    const { isLoading, ports } = this.state;
    console.log(ports);

    return (
      <>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Header />
            <Contents>
              <MainCont />
            </Contents>
            <Footer />
          </>
        )}
      </>
    );
  }
}

export default Main;
