import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './styles/country.css';
import GoIcon from './icons';
import { OpenModal } from '../features/modal/modalSlice';

const Country = (props) => {
  const { country, population } = props;
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
      <div>
        <h1>{country}</h1>
        <p>{population}</p>
      </div>
    </div>
  );
};

export default Country;
