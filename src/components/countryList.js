import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Country from './country';
import './styles/countryList.css';
import { getCountries } from '../features/countries/countriesSlice';

const CountryList = ({ searchInput }) => {
  const { countries } = useSelector((store) => store.country);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  // eslint-disable-next-line max-len
  const filteredCountries = countries.filter((country) => country.name.common.toLowerCase().includes(searchInput.toLowerCase()));

  return (
    <section>
      <div className="countries">
        {filteredCountries.map((item) => {
          const {
            id, name, population, flags,
          } = item;
          const { common } = name;
          const [, flagURLW320] = flags;

          return (
            <Country
              country={common}
              population={population}
              flags={flagURLW320}
              id={id}
              key={item.id}
            />
          );
        })}
      </div>
    </section>
  );
};

CountryList.propTypes = {
  searchInput: PropTypes.string.isRequired,
};

export default CountryList;
