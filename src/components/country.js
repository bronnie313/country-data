import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './styles/country.css';
import GoIcon from './icons';
import { OpenModal } from '../features/modal/modalSlice';

const Country = (props) => {
  const { country, population, flags } = props;
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(OpenModal());
  };

  return (
    <div className="country">
      <button
        className="go-btn"
        type="button"
        onClick={handleClick}
      >
        <NavLink to="/Modal"><GoIcon /></NavLink>
      </button>
      <img className="img" src={flags} alt="Country Flag" />
      <div className="info">
        <h1>{country}</h1>
        <p>
          {population}
        </p>
      </div>
    </div>
  );
};

Country.prototype = {
   flags: PropTypes.string.isRequired,
   population: PropTypes.string.isRequired,
   country: PropTypes.string.isRequired,
}

export default Country;
