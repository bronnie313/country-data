import React from 'react';
import PropTypes from 'prop-types';
import './styles/Search.css';

const Search = ({ setSearchInput }) => {
  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div>
      <input
        className="search-input"
        type="search"
        name="search"
        onChange={handleSearchInput}
        id="search"
        placeholder="search counrty"
      />
    </div>
  );
};

Search.propTypes = {
  setSearchInput: PropTypes.string.isRequired,
};

export default Search;
