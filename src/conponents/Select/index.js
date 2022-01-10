import React, { memo } from 'react';

const Select = ({ label, options, ...props }) => (
  <div className="set-units">
    <label htmlFor={props.id}>{label}</label>
    <select {...props}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  </div>
);

export default memo(Select);
