import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react';

import './Navbar.scss';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div id="navbar">
      <div id="navbar-desktop">
        <div className="left">
          <Link to="/">joe begley</Link>
        </div>
        <div className="right">
          <a href="/shows">shows</a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSe7qc131OjflHLorLBeXMMc7lx8G7EhZSZUwEzc-gFgTz4hUQ/viewform">contact</a>
          <a href="/podcast">podcast</a>
          <a href="https://www.youtube.com/@thejoebegs/videos">videos</a>
        </div>
      </div>
      <div id="navbar-mobile">
        <div className="top">
          <div className="left">
            <Link to="/" className={`${mobileOpen ? ' open' : ' closed'}`}>
              joe begley
            </Link>
          </div>
          <div className={`right ${mobileOpen ? ' open' : ' closed'}`}>
            <Hamburger toggled={mobileOpen} toggle={setMobileOpen} />
          </div>
        </div>
        <div className={`dropdown${mobileOpen ? ' open' : ' closed'}`}>
          <a href="/shows">shows</a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSe7qc131OjflHLorLBeXMMc7lx8G7EhZSZUwEzc-gFgTz4hUQ/viewform">contact</a>
          <a href="/podcast">podcast</a>
          <a href="https://www.youtube.com/@thejoebegs/videos">videos</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
