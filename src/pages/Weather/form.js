import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

const WeatherForm = forwardRef(({ searchWeather }, ref) => {
    console.log("WeatherForm render");
    return (
        <div>
            <form className="flex justify-center my-2" onSubmit={searchWeather}>
                <input type="text" className="placeholder:italic placeholder:text-gray-400 block border border-gray-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Enter a city name... " ref={ref} />
                <button type="submit" className="btn-primary" >
                    Search
                </button>
            </form>
        </div>
    );
});

WeatherForm.PropTypes = {
    searchWeather: PropTypes.func.isRequired,
}

export default memo(WeatherForm);