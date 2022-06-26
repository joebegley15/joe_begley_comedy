import React, { useEffect } from "react";
import { get } from "axios";

import "./Podcast.scss";

const Podcast = () => {
  useEffect(() => {
    const channelId = "UUTyUgPNVujdkn4HVCRwFuiw";
    const APIKey = "xxx";
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${channelId}&maxResults=5&key=${APIKey}`;
    get(url).then(res => {
      console.log(res);
    });
  }, []);
  return (
    <div id="podcast" className="background">
      <div className="top-padding"></div>
    </div>
  );
};

export default Podcast;
