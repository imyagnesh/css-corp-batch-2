import React, { forwardRef, memo } from "react";
import PropType from 'prop-types';

const Input = forwardRef((props, ref) => {
    return (
        <div className="input-box">
            <label htmlFor={props.id} className="label">
                Location
            </label>
            <input type="text" ref={ref} onChange={(event) => props.getCityInfo(event)} />
        </div>
    );
});

Input.PropType = {
    searchLocations: PropType.func.isRequired,
};

export default memo(Input);