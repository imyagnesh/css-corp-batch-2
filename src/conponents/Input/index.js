import React, { memo } from 'react';

const Input = ({ label, ...props }) => (
  <div className="input-box">
    <label htmlFor={props.id} className="label">
      {label}
    </label>
    <input type="text" {...props} />
  </div>
);

export default memo(Input);
