import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import "./ReactVideoPlayer.css";
const ReactVideoPlayer = ({ video }) => {
  return (
    <div className="video-player-container">
      <Video loop className="custom-video">
        <source src={video} type="video/mp4" />
      </Video>
    </div>
  );
};

export default ReactVideoPlayer;
