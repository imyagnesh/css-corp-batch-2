import React from "react"

const SearchResults = ({ cities, setCity }) => {
  return (
    <div className="search-results">
      {cities?.map(city => {
        return <button key={city.id} onClick={() => { setCity(city.id) }} className="search-option" type="button">{city.name}</button>
      })}
    </div>
  );
};

export default SearchResults