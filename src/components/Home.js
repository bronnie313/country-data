import React, { useState } from 'react';
import './styles/Home.css';
import CountryList from './countryList';
import Search from './Search';

const Home = () => {
  const [searchInput, setSearchInput] = useState('');
  return (
    <div>
      <div className="home-img">
        <img className="image" src="world.png" alt="Flag" />
        <div className="world">
          <h1>WORLD STATISTICS</h1>
        </div>
      </div>
      <div className="stats">
        <h2>STATS BY COUNTRY</h2>
        <Search setSearchInput={setSearchInput} />
      </div>
      <CountryList searchInput={searchInput} />
    </div>
  );
};

export default Home;
