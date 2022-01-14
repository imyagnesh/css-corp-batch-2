import React, { memo, useContext } from 'react';

const SearchResults = (props) => {
    console.log(props.cities);
    return (
        <div id="cityButton" className="search-results">
            {props.cities?.length > 0 ? (
                props.cities?.map((city) => (
                    <div
                        className="search-option"
                        key={city.id}
                        role="button"
                        onClick={() => props.searchLocations(city.id)}
                    >
                        {city.name}
                    </div>
                ))
            ) : (
                <p>City not found</p>
            )}
        </div>
    );
};

export default memo(SearchResults);