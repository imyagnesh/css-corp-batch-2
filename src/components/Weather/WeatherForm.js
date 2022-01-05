import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';

const WeatherForm = forwardRef(({ searchLocations }, ref) => {
    return (
        <div className=" order-1 flex-grow mr-1 border px-5 py-5 bg-white">
            <form>
                <div>
                    <h1 className="uppercase font-medium">Location</h1>
                    <input type="text" onChange={(e) => searchLocations(e.target.value)} ref={ref} />
                </div>

            </form>
        </div>
    );
});
WeatherForm.propTypes = {
    searchLocations: PropTypes.func.isRequired
}
export default memo(WeatherForm); 