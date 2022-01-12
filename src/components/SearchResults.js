import React, { forwardRef, memo, useEffect } from 'react';
import PropTypes from 'prop-types';

const SearchResults = forwardRef((props, ref) => {
  const searchresults = props.result;
  const { setContextState } = props;

  function setCity(e) {
    setContextState({
      city: e.target.innerText,
      units: props.units,
      weatherData: {},
      rerender: 1,
    });
    document.getElementById('cityname').value = e.target.innerText;
  }

  useEffect(() => {
    // Update the document element
    console.log('useEffect');
    const stateObj = props.getContextState();
    console.log(stateObj);
    if (document.getElementById('citysearch') !== null) {
      if (stateObj.unitsChanged === 1) {
        document.getElementById('citysearch').style.display = 'none';
      } else {
        document.getElementById('citysearch').style.display = 'block';
      }
    }
  });
  // const handler = useCallback(debounce(props.searchLocations, 1000), []);
  // console.log(state);
  console.log('SearchResults render');

  return (
    <div id="citysearch">
      <div>
        <div className="border border-3">
          <div className="absolute z-50 flex">
            {searchresults.map((item) => (
              <div className="bg-gradient-to-r from-purple-500 to-orange-500  w-full text-center rounded-md ml-2" onClick={setCity} key={item.id}>
                <span className="text-white h-auto">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

SearchResults.propTypes = {
  getContextState: PropTypes.func.isRequired,
  setContextState: PropTypes.func.isRequired,
  result: PropTypes.arrayOf(Object),
};
export default memo(SearchResults);
