import React, { useEffect, useState } from "react";
import { get } from "axios";
import YouTube from "react-youtube";
import FixedCenter from "../../components/FixedCenter";

import Itunes from "../../static/itunes.png";
import Spotify from "../../static/spotify.png";

import "./Podcast.scss";

const getOptions = () => {
  const { innerWidth } = window;
  const getAdjustedWidth = n => Math.floor((n / 64) * 39);
  const options = {
    height: getAdjustedWidth(window.innerWidth * 0.75),
    width: innerWidth * 0.75,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: false
    }
  };
  if (innerWidth > 1280) {
    options.height = "390";
    options.width = "640";
  } else if (innerWidth > 1024) {
    options.height = "304";
    options.width = "500";
  }
  return options;
};

const onReady = event => {
  // access to player in all event handlers via event.target
  event.target.pauseVideo();
};

const Podcast = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const channelId = "UUTyUgPNVujdkn4HVCRwFuiw";
    const APIKey = process.env.REACT_APP_YOUTUBE_API_KEY;
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${channelId}&maxResults=5&key=${APIKey}`;
    get(url).then(res => {
      setVideos(res?.data?.items);
    });
  }, []);
  const opts = getOptions();
  return (
    <div id="podcast" className="background">
      <div className="top-padding">
        <FixedCenter>
          <h1>AUDIO</h1>
          <div className="flex logos">
            <a href="https://podcasts.apple.com/us/podcast/creature-of-habit/id1525469384" target="_blank">
              <img src={Itunes}></img>
            </a>
            <a href="https://open.spotify.com/show/1WMBLZU2QO3Vfg2OLAJnmt?si=jTNG0hExTo-csxNyRP-vTA" target="_blank">
              <img src={Spotify}></img>
            </a>
          </div>
          <h1>VIDEO</h1>
          <div>
            {videos.map(video => {
              const videoId = video.snippet.resourceId.videoId;
              return (
                <YouTube videoId={videoId} opts={opts} onReady={onReady} />
              );
            })}
          </div>
        </FixedCenter>
      </div>
    </div>
  );
};

export default Podcast;
