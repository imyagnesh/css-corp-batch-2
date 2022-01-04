import React, { memo } from 'react'
import propTypes from 'prop-types';

const WeatherButton = ({ getCity }) => {
    console.log('btn render')

    return (
        <div className=" w-1/4 items-end ">
            <button type="button" onClick={getCity} className="py-8 text-white h-24 w-24 bg-orange-200 hover:bg-orange-800 font-medium rounded-full text-lg p-2.5 text-center inline-flex items-center mr-2 dark:bg-orange-300 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-45" viewBox="0 0 20 20" fill="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                </svg>
            </button>
        </div>
    )
}

export default memo(WeatherButton);

WeatherButton.propTypes = {
    getCity: propTypes.func.isRequired
}
