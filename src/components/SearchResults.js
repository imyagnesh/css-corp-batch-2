import React, { forwardRef, memo, useEffect } from 'react';

const SearchResults = forwardRef((props, ref) => {
    const searchresults = props.result;
    const setContextState = props.setContextState;
    const loadWeather = props.loadWeather;

    function setCity(e) {
        setContextState({
            city: e.target.innerText,
            units: props.units,
            weatherData: {},
            rerender: 1
        })
    }
    useEffect(() => {
        // Update the document element
        document.getElementById('citysearch').style.display = "block";
    });
    //const handler = useCallback(debounce(props.searchLocations, 1000), []);
    //console.log(state);
    console.log('SearchResults render');
    return (
        <div id="citysearch">
            <div>
                <div className="border border-3">
                    <div className="absolute z-50 flex">
                        {searchresults.map((item) => (
                            <div className="bg-gradient-to-r from-purple-500 to-orange-500  w-full text-center rounded-md ml-2">
                                <span className="text-white h-auto" onClick={setCity}>{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
});

export default memo(SearchResults);
