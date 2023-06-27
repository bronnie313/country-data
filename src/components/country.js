import React from 'react';
import './styles/country.css';
import GoIcon from './icons';

const Country = (props) => {
  const { country, population } = props;
  return (
    <div className="country">
      <button className="go-btn" type="button"><GoIcon /></button>
      <div>
        <h1>{country}</h1>
        <p>{population}</p>
      </div>
    </div>
  );
};

export default Country;
