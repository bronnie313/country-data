import React from 'react';
import Country from './country';
import './styles/countryList.css';

const countries = [
  {
    id: '1',
    population: '399.99',
    country: 'Uganda',
  },
  {
    id: '2',
    population: '499.99',
    country: 'Tanzania',
  },
  {
    id: '3',
    population: '699.99',
    country: 'Rwanda',
  },
  {
    id: '4',
    population: '599.99 ',
    country: 'Kenya',
  },
];

const CountryList = () => (
  <section>
    <div className="countries">
      {countries.map((item) => {
        const { country, population } = item;
        return (
          <Country
            country={country}
            population={population}
            key={item.id}
          />
        );
      })}
    </div>
  </section>
);

export default CountryList;
