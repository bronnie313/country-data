import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Country from './country';
import './styles/countryList.css';
import { getCountries } from '../features/countries/countriesSlice';

const CountryList = () => {
  const { countries } = useSelector((store) => store.country);
  const dispatch = useDispatch();

  // countries.forEach((country) => {
  //   console.log(country.flags[1]);
  // })

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <section>
      <div className="countries">
        {countries.map((item) => {
          const { name, population, flags } = item;
          const { common } = name;
          const [, flagURLW320]= flags;

          return (
            <Country
              country={common}
              population={population}
              flags={flagURLW320}
              key={item.id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CountryList;
