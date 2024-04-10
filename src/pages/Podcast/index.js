import React from "react";
import FixedCenter from "../../components/FixedCenter";

import Itunes from "../../static/itunes.png";
import Spotify from "../../static/spotify.png";

import "./Podcast.scss";

const Podcast = () => {
    return (
      <div id="podcast" className="background">
        <div className="top-padding">
          <FixedCenter>
            <div>Available Wherever You Get Your Podcasts</div>
            <div className="flex logos">
              <a href="https://podcasts.apple.com/us/podcast/creature-of-habit/id1525469384" target="_blank">
                <img src={Itunes}></img>
              </a>
              <a href="https://open.spotify.com/show/1WMBLZU2QO3Vfg2OLAJnmt?si=jTNG0hExTo-csxNyRP-vTA" target="_blank">
                <img src={Spotify}></img>
              </a>
            </div>
          </FixedCenter>
        </div>
      </div>
    );
  };
  
  export default Podcast;
  