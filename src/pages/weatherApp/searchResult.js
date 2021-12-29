import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { WeatherConsumer } from './context/weatherContext';
import propTypes from 'prop-types';

const SearchResult = () => {
    console.log('Search Result render');
    return (
        <WeatherConsumer>
            {({ locations, loadReportData }) => (
                <div className="z-10 origin-top-right top-[70px] absolute w-full p-4 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" >
                    <div className="py-1">
                        {locations.map(({ name, country, lat }) => (
                            <button type="button" className="btn-search-result" key={lat} onClick={() => {
                                loadReportData(`${name},${country}`);
                            }}>
                                {name},{country}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </WeatherConsumer>
    )
}

SearchResult.propTypes = {
    locations: propTypes.shape({
        name: PropTypes.string,
        country: PropTypes.string,
        lat: PropTypes.string,
    }),
    loadReportData: propTypes.func
}

export default memo(SearchResult);

