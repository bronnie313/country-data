import React from 'react';
import './styles/Home.css';
import CountryList from './countryList';

const Home = () => (
  <div>
    <div className="home-img">
      <img className="image" src="world.png" alt="Flag" />
      <div className="world"><h1>WORLD STATISTICS</h1></div>
    </div>
    <div className="stats"><h2>STATS BY COUNTRY</h2></div>
    <CountryList />
  </div>
);

export default Home;
