import React, { useEffect, useState } from "react";
import { get } from "axios";

import "./Podcast.scss";
import YouTube from "react-youtube";

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: false
  }
};

const onReady = event => {
  // access to player in all event handlers via event.target
  event.target.pauseVideo();
}

const Podcast = () => {
  const [videos, setVideos] = useState([]);
  console.log(videos);
  useEffect(() => {
    const channelId = "UUTyUgPNVujdkn4HVCRwFuiw";
    const APIKey = process.env.REACT_APP_YOUTUBE_API_KEY;
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${channelId}&maxResults=5&key=${APIKey}`;
    get(url).then(res => {
      setVideos(res?.data?.items);
    });
  }, []);
  return (
    <div id="podcast" className="background">
      <div className="top-padding">
        {videos.map(video => {
          const videoId = video.snippet.resourceId.videoId;
          return (
            <YouTube
              videoId={videoId}
              opts={opts}
              onReady={onReady}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Podcast;
