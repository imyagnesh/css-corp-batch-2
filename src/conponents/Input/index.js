import React, { memo, forwardRef } from 'react';

const Input = forwardRef(({ label, ...props }, ref) => (
  <div className="input-box">
    <label htmlFor={props.id} className="label">
      {label}
    </label>
    <input type="text" {...props} ref={ref} />
  </div>
));

Input.displayName = 'Input';

export default memo(Input);
