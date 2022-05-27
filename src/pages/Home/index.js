import React from 'react';

import Standup from '../../static/1122_elbow_room_157.JPG';

import './Home.scss';

const Home = () => {
  return (
    <div id="home" className="background">
      <img src={Standup} alt="Joe Begley doing standup"></img>
    </div>
  );
};

export default Home;
