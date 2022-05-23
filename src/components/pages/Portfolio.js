import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import PortCont from "../includes/PortCont";
import Title from "../layout/Title";
import Touch from "../layout/Touch";
import Loading from "../includes/Loading";
import axios from "axios";
import { gsap } from "gsap";

// function Portfolio() {
//   return (
//     <>
//       <Header />
//       <Contents>
//         <Title title={["portfolio", "book"]} />
//         <PortCont />
//         <Touch />
//       </Contents>
//       <Footer />
//     </>
//   );
// }

class Portfolio extends React.Component {
  state = {
    isLoading: true,
    ports: [],
  };

  mainAnimation = () => {
    setTimeout(() => {
      gsap.to("#header", { duration: 0.8, top: 0 });
      gsap.to("#footer", { duration: 0.8, bottom: 0, delay: 0.2 });
      gsap.to(".cont__title strong", {
        duration: 0.8,
        y: 0,
        opacity: 1,
        delay: 1,
        ease: "power4.out",
      });
    });
    gsap.to(
      ".port__inner",
      {
        duration: 0.5,
        y: 0,
        opacity: 1,
        delay: 1.8,
        ease: "power4.out",
      },
      10
    );
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
              <Title title={["portfolio", "book"]} />
              <PortCont ports={ports} />
              <Touch />
            </Contents>
            <Footer />
          </>
        )}
      </>
    );
  }
}

export default Portfolio;
