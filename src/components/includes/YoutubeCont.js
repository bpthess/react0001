import React from "react";
import YoutubeItem from "./YoutubeItem";

function YoutubeCont(props) {
  return (
    <div className="youtube__list">
      <ul>
        {props.videos.map((video, index) => (
          <YoutubeItem key={index} video={video} />
        ))}
      </ul>
    </div>
  );
}

export default YoutubeCont;
