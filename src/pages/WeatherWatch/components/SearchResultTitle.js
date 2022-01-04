import React, { memo } from 'react'
import propTypes from 'prop-types';

const SearchResultTitle = ({ cityName, feelsLike, checked }) => {
    console.log('searchtitle render')

    return (
        <div className="w-3/4  items-start font-semibold mx-4">
            <p className=" text-4xl subpixel-antialiased font-semibold pb-2">{cityName}</p>
            {checked ?
                <span className="text-gray-400">Scattered clouds | feels like {feelsLike}&deg;C</span> :
                <span className="text-gray-400">Scattered clouds | feels like {feelsLike}&deg;F</span>
            }
        </div>
    )
}


export default memo(SearchResultTitle);

SearchResultTitle.propTypes = {
    cityName: propTypes.string.isRequired,
    feelsLike: propTypes.number.isRequired,
    checked: propTypes.bool.isRequired

}

