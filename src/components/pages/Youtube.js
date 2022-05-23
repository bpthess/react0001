import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import YoutubeCont from "../includes/YoutubeCont";
import Title from "../layout/Title";
import Touch from "../layout/Touch";

function Youtube() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=AIzaSyBRzon-dsVZ3UjsBBNQjBVctF7qY8zr6FA",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }, []);

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
