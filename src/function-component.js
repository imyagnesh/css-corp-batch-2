import React, { memo } from 'react';

const FunctionComponent = () => {
  return (
    <div>
      <h1>Functional Component</h1>
      <hr />
    </div>
  );
};

export default memo(FunctionComponent, (prevProps, prevState) => {
  return true;
});
