import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import Touch from "../layout/Touch";
import Loading from "../includes/Loading";
import { gsap } from "gsap";
import HTML from "../includes/ReferTabHtml";
import CSS from "../includes/ReferTabCss";

class Reference extends React.Component {
  state = {
    isLoading: true,
    activeTab: 0,
  };

  clickHandler = (id) => {
    this.setState({ activeTab: id });
  };

  referAnimation = () => {
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
      gsap.to(".cont__title em", {
        duration: 0.8,
        y: 0,
        opacity: 1,
        delay: 1.4,
        ease: "power4.out",
      });
      gsap.to(".refer__inner", {
        duration: 0.5,
        y: 0,
        opacity: 1,
        delay: 1.8,
        ease: "power4.out",
      });
    }, 10);
  };

  getRefers = async () => {
    this.setState({ isLoading: false });
    this.referAnimation();
  };

  //사이트가 시작하자마자 실행되는 함수가 componentDidMount()
  componentDidMount() {
    setTimeout(() => {
      console.log("첫번째 시작"); //콜백함수! 재귀함수랑 비교해서 면접질문
      document.getElementById("loading").classList.remove("loading__active");
      this.getRefers();
    }, 2000);
  }

  render() {
    const { isLoading } = this.state;
    const obj = {
      0: <HTML />,
      1: <CSS />,
    };

    console.log(this.state.activeTab);

    return (
      <>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Header />
            <Contents>
              <Title title={["reference", "book"]} color="" />
              <section className="refer__cont">
                <div className="container">
                  <div className="refer__inner">
                    <thead className="refer__table">
                      <tr className="table">
                        <th onClick={() => this.clickHandler(0)}>HTML</th>
                        <th onClick={() => this.clickHandler(1)}>CSS</th>
                      </tr>
                    </thead>
                    <div className="refer__list">
                      {obj[this.state.activeTab]}
                    </div>
                  </div>
                </div>
              </section>
              <Touch />
            </Contents>
            <Footer />
          </>
        )}
      </>
    );
  }
}

export default Reference;
