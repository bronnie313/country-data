import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './styles/Header.css';

const Header = () => {
  const { isOpen } = useSelector((store) => store.modal);
  return (
    <nav>
      <button className="header-btn back" type="button">
        <NavLink to="/">
          {isOpen ? '<' : '<2015' }
        </NavLink>
      </button>
      <ul>
        <li><button className="header-btn" type="button"><img className="header-icon" src="./mic.jpg" alt="MIC" /></button></li>
        <li><button className="header-btn" type="button"><img className="header-icon2" src="./setting.jpg" alt="SETTING" /></button></li>
      </ul>
    </nav>
  );
};

export default Header;
