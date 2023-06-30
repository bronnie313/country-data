import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './styles/Modal.css';

const Modal = () => {
  const { countries, selectedCountryId } = useSelector((store) => store.country);
  const selectedCountry = countries.find((country) => country.id === selectedCountryId);

  if (!selectedCountry) {
    return null;
  }

  const {
    id, name, population, area, flags, region, continents, capital, maps,
  } = selectedCountry;
  const [, flagURLW320] = flags;
  const [continent] = continents;
  const [capitalCity] = capital;
  const { common } = name;
  const { googleMaps } = maps;

  return (
    <aside>
      <div className="modal">
        <SelectedModal
          country={common}
          capital={capitalCity}
          continent={continent}
          area={area}
          population={population}
          flags={flagURLW320}
          region={region}
          googleMaps={googleMaps}
          id={id}
        />
      </div>
    </aside>
  );
};

export const SelectedModal = (props) => {
  const {
    country, population, area, flags, region, continent, capital, googleMaps,
  } = props;

  return (
    <div className="modal-div">
      <img className="modal-img" src={flags} alt="Country Flag" />
      <ul className="modal-ul">
        <li>
          <h2>Country:</h2>
          <h2>{country}</h2>
        </li>
        <li>
          <h3>Capital:</h3>
          <h3>{capital}</h3>
        </li>
        <li>
          <h4>Population: </h4>
          <h4>
            {population}
            {' '}
            <i>people</i>
          </h4>
        </li>
        <li>
          <h4>Area: </h4>
          <h4>{area}</h4>
        </li>
        <li>
          <h4>Region: </h4>
          <h4>{region}</h4>
        </li>
        <li>
          <h4>Continent:</h4>
          <h4>
            {' '}
            {continent}
          </h4>
        </li>
        <li><a href={googleMaps}>googleMaps</a></li>
      </ul>
    </div>
  );
};

SelectedModal.propTypes = {
  flags: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  area: PropTypes.number.isRequired,
  capital: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  continent: PropTypes.string.isRequired,
  googleMaps: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default Modal;
