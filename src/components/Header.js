import React from 'react';
import './styles/Header.css';

const Header = () => (
  <nav>
    <button className="header-btn back" type="button">
      {'<'}
      2015
    </button>
    <ul>
      <li><button className="header-btn" type="button"><img className="header-icon" src="./mic.jpg" alt="MIC" /></button></li>
      <li><button className="header-btn" type="button"><img className="header-icon2" src="./setting.jpg" alt="SETTING" /></button></li>
    </ul>
  </nav>
);

export default Header;
