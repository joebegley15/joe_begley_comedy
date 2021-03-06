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
          <Link to="#">joe begley</Link>
        </div>
        <div className="right">
          <Link to="/">home</Link>
          <a href="#">shows</a>
          <a href="#">contact</a>
          <a href="/podcast">podcast</a>
          <a href="#">videos</a>
        </div>
      </div>
      <div id="navbar-mobile">
        <div className="top">
          <div className="left">
            <Link to="#" className={`${mobileOpen ? ' open' : ' closed'}`}>
              joe begley
            </Link>
          </div>
          <div className={`right ${mobileOpen ? ' open' : ' closed'}`}>
            <Hamburger toggled={mobileOpen} toggle={setMobileOpen} />
          </div>
        </div>
        <div className={`dropdown${mobileOpen ? ' open' : ' closed'}`}>
          <Link to="/">home</Link>
          <a href="#">shows</a>
          <a href="#">contact</a>
          <a href="/podcast">podcast</a>
          <a href="#">videos</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
