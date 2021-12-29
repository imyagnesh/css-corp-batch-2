import React, { forwardRef, memo, useCallback } from 'react';
import { debounce } from "lodash";

const Input = forwardRef((props, ref) => {
    const setContextState = props.setContextState;
    const handler = useCallback(debounce(props.loadWeather, 1000), []);
    function handleChange(e) {
        console.log(e.target.value);
        setContextState({
            city: e.target.value || 'Bengaluru',
            weatherData: {}
        });
        handler();
    }
    return (
        <div className="pt-6 w-3/4">
            <div className="border border-3">
                <div>
                    <div><label className="w-full pl-3 font-bold">LOCATION</label></div>
                    <input className="pb-4" type="text" onChange={handleChange}></input>
                </div>
            </div>
        </div>

    );
});

export default memo(Input);