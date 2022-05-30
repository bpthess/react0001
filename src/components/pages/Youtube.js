import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import YoutubeCont from "../includes/YoutubeCont";
import YoutubeSearch from "../includes/YoutubeSearch";
import Title from "../layout/Title";
import Touch from "../layout/Touch";

function Youtube() {
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    //API_키_숨기기
    // fetch(
    //   `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${query}&key=${process.env.REACT_APP_YOUTUBE_API}&type=video`,
    //   requestOptions
    // )

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&key=AIzaSyBg-oslPIH_eJfSw3hy2EBfI9Bb0OOvFrc&type=video`,
      requestOptions
    )
      // fetch의 값을 json파일로 가져옴
      .then((response) => response.json())
      // json파일의 결과
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=&key=AIzaSyBCZ1dZYcn9rNZshdqQTtK8ftLKBg1zsC4&type=video`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setVideos(result.items);
      })
      .catch((error) => console.log("error", error));
  }, []);

  //console.log(videos);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["youtube", "reference"]} />
        <section className="youtube__cont">
          <div className="container">
            <div className="youtube__inner">
              <YoutubeSearch onSearch={search} />
              <YoutubeCont videos={videos} />
            </div>
          </div>
        </section>
        <Touch />
      </Contents>
      <Footer />
    </>
  );
}

export default Youtube;
