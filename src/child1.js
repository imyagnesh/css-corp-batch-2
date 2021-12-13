import React, { memo } from 'react';

const Child1 = () => {
  console.log('child1 render');
  return (
    <div>
      <h1>Hello from child1 component</h1>
    </div>
  );
};
export default memo(Child1, (prevProps, nextProps) => prevProps.counter > nextProps.counter);
