import React from "react";
import FixedCenter from "../../components/FixedCenter";

import Itunes from "../../static/itunes.png";
import Spotify from "../../static/spotify.png";
import PocketCasts from "../../static/pc.png";
import Youtube from "../../static/Untitled-5asdf.png";

import "./Podcast.scss";

const Podcast = () => {
    return (
        <div id="podcast" className="background">
            <div className="top-padding">
                <FixedCenter>
                    <div className="container">
                        <div><h1>Shangrila Podcast</h1></div>
                        <div className="subtext">Shangrila is the official podcast of comedian Joe Begley. It is produced by Brandon Legendre out of Creek and Cave Studios in Austin, Texas.</div>
                        <div className="logo-container">
                            <div className="logos">
                                <a href="https://pca.st/dzgfdib3" target="_blank">
                                    <img src={PocketCasts}></img>
                                </a>
                                <a href="https://podcasts.apple.com/us/podcast/shangrila-with-joe-begley/id17287324474" target="_blank">
                                    <img src={Itunes}></img>
                                </a>
                                <a href="https://open.spotify.com/show/5OrOGxCJKJgOnhPoWF0MD7?si=edfef9d45ab2413c" target="_blank">
                                    <img src={Spotify}></img>
                                </a>
                                <a href="https://www.youtube.com/@thejoebegs/podcasts" target="_blank">
                                    <img src={Youtube}></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </FixedCenter>
            </div>
        </div>
    );
};

export default Podcast;
