import React, { memo } from 'react';
import PropTypes from 'prop-types';

const WeatherSearchResults = ({ searchResult, searchStatus, getWeather, locationText }) => {
    return (
        <div className="flex">
            {searchStatus?.status === 'REQUEST' && <div className="font-semibold text-red-400">Loading...</div>}
            {searchStatus?.status === 'FAIL' && <div className=" font-semibold text-red-800">{searchStatus.payload.message}</div>}
            {searchResult.length > 0 && !searchStatus?.status ? searchResult.map((item) => <button className="btn-primary my-1 mx-1 from-red-700 to-purple-400 bg-gradient-to-r rounded-full" key={item.id} onClick={() => getWeather(item.name)}>{item.name}</button>) : (locationText != "" && !searchStatus?.status ? <div className='font-bold text-red-400 ml-5'>No city found!</div> : '')}
        </div>
    )
}
WeatherSearchResults.propTypes = {
    searchResult: PropTypes.array.isRequired,
    searchStatus: PropTypes.shape({
        status: PropTypes.oneOf(['REQUEST', 'FAIL']),
        type: PropTypes.oneOf(['SEARCH_CITY']),
        payload: PropTypes.objectOf(Error)
    }),
    getWeather: PropTypes.func.isRequired,
    locationText: PropTypes.string.isRequired,
}
WeatherSearchResults.defaultProps = {
    searchStatus: undefined
}
export default memo(WeatherSearchResults);