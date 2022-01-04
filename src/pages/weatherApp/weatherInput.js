import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { WeatherConsumer } from './context/weatherContext';

const SearchForm = forwardRef((props, ref) => (
  <WeatherConsumer>
    {({ fetchLocationInfo, loadCityStatus }) => (
      <div className="w-2/3 bg-[#F1F1F1] rounded p-2 mr-[5px] uppercase text-sm border">
        <h3>Location</h3>
        <div className="mt-1 relative">
          <input type="text" id="searchInput" className="form-input bg-[#ffffff]" ref={ref} onChange={(event) => fetchLocationInfo(event)} />
        </div>
      </div>
    )}
  </WeatherConsumer>
));

SearchForm.propTypes = {
  fetchLocationInfo: PropTypes.func,
  loadCityStatus: PropTypes.shape({
    type: PropTypes.string,
    payload: PropTypes.objectOf(Error),
    status: PropTypes.oneOf(['REQUEST', 'FAIL']),
  }),
};

export default memo(SearchForm);
