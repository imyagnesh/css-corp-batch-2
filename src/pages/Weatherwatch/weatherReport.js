import React, { forwardRef } from 'react';
//import cn from 'classnames';
//import PropTypes from 'prop-types';

const weatherReport = ({ weatherList, weatherDetails, weatherCityList }) => {
    return (
        <div className="bg-[#FFF] px-2 mt-1">
        <div className="flex">
            <div className="watch_text weather_city">{weatherDetails?.city} <br /> <span className="weather_desc">SCATTERED COLUDS | FEELS LIKE {weatherDetails?.curr_temp} </span></div>
            <div><img src={weatherDetails?.image} width="75" height="75" /></div>
        </div>
        <div class="flex flex-items">
            <div className=" shadow-inner watch_block"> CURRENT TEMPERATURE
                <div className="watch_block_text">{weatherDetails?.curr_temp}</div>
            </div>
            <div className="shadow-inner watch_block"> MAXIMUM TEMPERATURE
                <div className="watch_block_text">{weatherDetails?.max_temp}</div>
            </div>
            <div className="shadow-inner watch_block"> MINIMUM TEMPERATURE
                <div className="watch_block_text">{weatherDetails?.min_temp}</div>
            </div>
        </div>
        <div class="flex flex-items">
            <div className="shadow-inner watch_block watch_block2"> WIND SPEED
                <div className="watch_block_text">{weatherDetails?.wind_speed}</div>
            </div>
            <div className="shadow-inner watch_block watch_block2"> WIND DIRECTION
                <div className="watch_block_text">{weatherDetails?.wind_dir}</div>
            </div>
        </div>
        <div class="flex">
            <div className="watch_block watch_block_blue"> PRESSURE
                <div className="watch_block_text">{weatherDetails?.pressure}</div>
            </div>
            <div className="watch_block watch_block_blue"> HUMIDITY
                <div className="watch_block_text">{weatherDetails?.humidity}</div>
            </div>
        </div>    
    </div>
    );
};

weatherReport.displayName = 'weatherReport';

export default weatherReport;